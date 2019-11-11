import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { MyDirective } from 'src/app/directives/my-directive.directive';
import { timer } from 'rxjs';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit, AfterViewInit {
    @ViewChild(MyDirective, { static: false }) dirRef?: MyDirective;
    @ViewChildren(MyDirective) dirRefList?: QueryList<MyDirective>;
    @ViewChild('myDirDom', {static: false}) dirRef3?: MyDirective;
    constructor() { }

    ngOnInit() {
    }

    ngAfterViewInit() {

        this.dirRef.logSomething();

        console.log('list', this.dirRefList);

        this.dirRef3.logSomething();
    }

}
