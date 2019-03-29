import {Component, NgZone} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    template: `
        <a (click)="jumpA()">A page</a>
        <a (click)="jumpB()">B page</a>
        <a [routerLink]="['/b', {a: 3}]">B page</a>
        <router-outlet></router-outlet>
    `,
    styles: [
            `a {
            color: blue;
            padding-right: 10px;
            cursor: pointer;
        }`

    ],
})
export class IndexPageComponent {

    constructor(
        private router: Router,
        private zone: NgZone,
    ) {
    }

    jumpA() {
        // this.zone.run();
        this.router.navigate(['/a', 1], {
            queryParamsHandling: 'preserve',
        });
        // this.router.navigate(['/a', null, 'user', 3]);
        // const t = this.router.createUrlTree([{segmentPath: '/one/two'}, {a: 33, b: 44}, 'test', 33]);
        // console.log('tree', t);
    }

    jumpB() {
        this.router.navigate(['/b', {a: 33}], {
            queryParams: {
                code: 'bbb',
            }
        });
    }
}
