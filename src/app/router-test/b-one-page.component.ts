import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    template: `<h2>b-one page</h2>`,
})
export class BOnePageComponent implements OnInit {

    constructor(
        private activateRouter: ActivatedRoute,
    ) {

    }
    ngOnInit(): void {
        console.log('b-one page a params', this.activateRouter.snapshot.paramMap.get('a'));
        console.log('b-one page code', this.activateRouter.snapshot.queryParamMap.get('code'));

    }
}
