import {Component, OnInit} from '@angular/core';
import {interval, Observable, Observer, TeardownLogic, timer} from 'rxjs';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

    number: number = 0;

    isComplete: boolean = false;

    constructor() {
    }

    ngOnInit() {
        const observable = Observable.create((observer: Observer<number>): TeardownLogic => {
            interval(1000).subscribe(res => {
                observer.next(res);
                if (res === 20) {
                    observer.complete();
                }
            });
        });
        observable.subscribe(
            res => {
                this.number = res;
            },
            err => console.log(err),
            () => {
                this.isComplete = true;
            },
        );

    }

}
