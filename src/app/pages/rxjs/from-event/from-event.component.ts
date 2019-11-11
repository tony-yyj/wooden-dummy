import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {BehaviorSubject, fromEvent, timer} from 'rxjs';
import {MatButton} from '@angular/material';
import {animate, keyframes, state, style, transition, trigger, useAnimation} from '@angular/animations';
import {fallColor, PairsPriceAnimation, raiseColor} from '../../../animations/pairs-price.animation';

@Component({
    selector: 'app-from-event',
    templateUrl: './from-event.component.html',
    styleUrls: ['./from-event.component.less'],
    animations: [
        trigger('priceChange', [
            state('raise', style({
                background: 'transparent',
            })),
            state('fall', style({
                background: 'transparent',
            })),
            state('zero', style({
                background: 'transparent',
            })),
            transition('zero <=> raise', [
                useAnimation(PairsPriceAnimation, {
                    params: {
                        linearGradient: raiseColor,
                    }
                }),
            ]),
            transition('fall => raise', [
                useAnimation(PairsPriceAnimation, {
                    params: {
                        linearGradient: raiseColor,
                    }
                }),
            ]),
            transition('zero <=> fall', [
                useAnimation(PairsPriceAnimation, {
                    params: {
                        linearGradient: fallColor,
                    }
                }),
            ]),
            transition('raise => fall', [
                useAnimation(PairsPriceAnimation, {
                    params: {
                        linearGradient: fallColor,
                    }
                }),
            ]),
        ]),
    ]
})
export class FromEventComponent implements OnInit, AfterViewInit {

    @ViewChild('createButton', {static: true}) createButton: MatButton;

    data$: BehaviorSubject<number> = new BehaviorSubject<number>(null);

    list: { status: string, name: string }[] = [];

    static getStatus(status) {
        switch (status) {
            case 'zero':
                return 'raise';
            case 'raise':
                return 'fall';
            case 'fall':
                return 'raise';
        }
    }

    constructor(
        private el: ElementRef,
        private render: Renderer2,
    ) {
    }

    ngOnInit() {
        // this.fromEvent();
        this.list = [1, 2, 3, 4, 5].map(item => {
            return {
                status: 'zero',
                name: 'test',
            };
        });
        this.data$.subscribe(value => {
            console.log('value', value);
        });
    }

    ngAfterViewInit(): void {
        this.fromEvent2();
    }

    /**
     * 点击后点击的地方出现一个div 并开始放大二倍的动画，然后移除这个div
     */
    private fromEvent() {
        fromEvent(document, 'click').subscribe((event: MouseEvent) => {
            console.log('click', event);
            // 获得坐标
            const x = event.clientX;
            const y = event.clientY;

            const devDom = this.render.createElement('div');
            devDom.className = 'lover';
            this.render.setStyle(devDom, 'top', y + 'px');
            this.render.setStyle(devDom, 'left', x + 'px');
            this.render.appendChild(this.el.nativeElement, devDom);
            // 500毫秒后删除dom
            timer(500).subscribe(num => {
                this.render.removeChild(this.el.nativeElement, devDom);
            });
        });
    }

    private fromEvent2() {
        console.log('create', this.createButton._elementRef.nativeElement);
        fromEvent(this.createButton._elementRef.nativeElement, 'click').subscribe(() => {
            this.data$.next(Math.floor(Math.random() * 5));
            console.log('button click value', this.data$.getValue());
            const index = Math.floor(Math.random() * (this.list.length - 1));
            const preItem = this.list[index];
            this.list[index].status = FromEventComponent.getStatus(preItem.status);
        });
    }



}
