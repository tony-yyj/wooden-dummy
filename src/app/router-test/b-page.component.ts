import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Component({
    template: `
        <h2>B page</h2>
        <router-outlet></router-outlet>
    `,
})
export class BPageComponent implements OnInit {

    constructor(
        private activateRouter: ActivatedRoute,
    ) {

    }

    ngOnInit(): void {
        this.activateRouter.paramMap.pipe(
            switchMap(params => {
                return of(params.get('a'));
            })
        ).subscribe((data) => {
            console.log('test', data);
        });
        console.log('b page a params', this.activateRouter.snapshot.paramMap.get('a'));

        this.activateRouter.queryParamMap.pipe(
            switchMap(params => {
                return of(params.get('code'));
            })
        ).subscribe((data) => {
            console.log('query', data);
        });
        console.log('b page a query param', this.activateRouter.snapshot.queryParamMap.get('code'));


    }
}
