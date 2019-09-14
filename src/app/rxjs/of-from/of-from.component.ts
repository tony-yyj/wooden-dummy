import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {concat, from, fromEvent, interval, of, timer} from 'rxjs';
import {concatAll, map, switchMap, take} from 'rxjs/operators';
import {fromPromise} from 'rxjs/internal-compatibility';

@Component({
    selector: 'app-of-from',
    templateUrl: './of-from.component.html',
    styleUrls: ['./of-from.component.less']
})
export class OfFromComponent implements OnInit {

    static* generateDoubles(seed) {
        let i = seed;
        while (true) {
            yield i;
            i = 2 * i;
        }
    }

    constructor(
         private render: Renderer2,
         private el: ElementRef,
    ) {
    }

    ngOnInit() {
        // this.ofOperate();
        // this.fromOperate();
        // this.fromPromise();
        this.fromEvent();
    }


    private ofOperate() {
        of(1, 2, 3).pipe(
            map(num => {
                return {
                    num,
                    test: 3,
                };
            })
        ).subscribe(res => {
            console.log(res);
        });
    }

    private fromOperate() {
        const m = new Map();
        m.set({a: '3'}, 'hi');
        m.set({b: 4}, 'tony');
        from(m).subscribe(res => {
            console.log(JSON.stringify(res));
        });
    }

    private fromPromise() {
        fromPromise(fetch('http://www.mxnzp.com/api/weather/current/%E6%B7%B1%E5%9C%B3')).subscribe(res => {
                if (res.status === 200) {
                    res.json().then(r => {
                        console.log(r);
                    });
                }
            },
            err => {
                console.log('err', err);
            }
        );
    }

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

}
