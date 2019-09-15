import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-rxjs',
    templateUrl: './rxjs.component.html',
    styleUrls: ['./rxjs.component.less']
})
export class RxjsComponent implements OnInit {

    rxjsMenu: string[] = ['a', 'b'];


    constructor() {
    }

    ngOnInit() {
    }

}
