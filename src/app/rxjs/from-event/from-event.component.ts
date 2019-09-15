import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {BehaviorSubject, fromEvent, timer} from 'rxjs';
import {MatButton} from '@angular/material';

@Component({
    selector: 'app-from-event',
    templateUrl: './from-event.component.html',
    styleUrls: ['./from-event.component.less']
})
export class FromEventComponent implements OnInit, AfterViewInit {

    @ViewChild('createButton', {static: true}) createButton: MatButton;

    data$: BehaviorSubject<number> = new BehaviorSubject<number>(null);

    constructor(
        private el: ElementRef,
        private render: Renderer2,
    ) {
    }

    ngOnInit() {
        // this.fromEvent();
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
            timer(500).subscribe( num => {
                this.render.removeChild(this.el.nativeElement, devDom);
            });
        });
    }

    private fromEvent2() {
        console.log('create', this.createButton._elementRef.nativeElement);
        fromEvent(this.createButton._elementRef.nativeElement, 'click').subscribe(() => {
            this.data$.next(Math.floor(Math.random() * 5));
            console.log('button click value', this.data$.getValue());
        });
    }

}
