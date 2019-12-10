import {AfterViewInit, Component, OnInit, Renderer2} from '@angular/core';
import {fromEvent, of} from 'rxjs';
import {delay, map, switchMap, takeUntil, takeWhile, tap} from 'rxjs/operators';

class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}


@Component({
    selector: 'app-drag-box',
    templateUrl: './drag-box.component.html',
    styleUrls: ['./drag-box.component.scss']
})
export class DragBoxComponent implements OnInit, AfterViewInit {

    private boxSize = 100;
    private worldArea = {
        width: 1200,
        height: 600,
    };

    static getPosition(el: HTMLElement): Point {
        const reg = /matrix\((\d+,\s){4}(\d+),\s(-?\d+)/i;
        const style = getComputedStyle(el);
        console.log('matrix', style.transform);
        const result = style.transform.match(reg);
        let pos = new Point(0, 0);
        if (result) {
            pos = new Point(parseInt(result[2], 10), parseInt(result[3], 10));
        }
        return pos;
    }

    static setPosition(el: HTMLElement, pos: Point) {
        el.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
    }


    constructor(
        private render: Renderer2,
    ) {
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
        const dom = document.getElementById('box');

        const mouseDown$ = fromEvent(dom, 'mousedown');
        const mouseMove$ = fromEvent(document, 'mousemove');
        const mouseUp$ = fromEvent(document, 'mouseup');

        mouseDown$.pipe(
            switchMap((event: MouseEvent) => {
                return of({
                    pos: DragBoxComponent.getPosition(dom),
                    event,
                }).pipe(
                    delay(200),
                    takeUntil(mouseMove$),
                );
            }),
            switchMap((initialState: { pos: Point, event: MouseEvent }) => {
                const initialPos = initialState.pos;
                const {clientX, clientY} = initialState.event;
                this.render.addClass(dom, 'blink');
                return mouseMove$.pipe(
                    map((mouseMoveEvent: MouseEvent) => (
                        new Point(
                            mouseMoveEvent.clientX - clientX + initialPos.x,
                            mouseMoveEvent.clientY - clientY + initialPos.y,
                        )
                    )),
                    takeUntil(mouseUp$.pipe(
                        tap(() => {
                            this.render.removeClass(dom, 'blink');
                        })
                    )),
                );
            }),
        ).subscribe((pos: Point) => {
            console.log('pos', pos);
            if (pos.x < 0 || pos.y < 0) {
                console.log('test');
                DragBoxComponent.setPosition(dom, new Point(
                    pos.x > 0 ? pos.x : 0,
                    pos.y > 0 ? pos.y : 0,
                ));
            } else {
                // 右边和下边的界限
                const x = this.worldArea.width - this.boxSize - pos.x;
                const y = this.worldArea.height - this.boxSize - pos.y;
                DragBoxComponent.setPosition(dom, new Point(
                    x > 0 ? pos.x : this.worldArea.width - this.boxSize,
                    y > 0 ? pos.y : this.worldArea.height - this.boxSize,
                ));
            }
        });

    }

}
