import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';

@Component({
    selector: 'app-subject',
    templateUrl: './subject.component.html',
    styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

    lastValue: number = 0;

    behaviorSub: BehaviorSubject<number>;
    constructor() { }

    ngOnInit() {
        this.behaviorSub = new BehaviorSubject(0);
        this.behaviorSub.subscribe(data => {
            console.log('behavior subject: ', data);
        });

        interval(1000).subscribe(data => {
            this.behaviorSub.next(data);
            if (data === 10) {
                this.behaviorSub.complete();
            }
        })

    }


    getValue() {
        this.lastValue = this.behaviorSub.getValue();
    }


}
