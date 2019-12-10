import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router} from '@angular/router';
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
        private location: Location,
        private router: Router,
    ) {

    }

    ngOnInit(): void {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                const urlList = [];
                this.activateRouter.snapshot.pathFromRoot.forEach((item: ActivatedRouteSnapshot) => {
                    if (item.url && item.url.length) {
                        item.url.forEach(i => {
                            urlList.push(i.path);
                        });
                    }
                });
                console.log('url', '/' + urlList.join('/'));
            }
        });
        // this.activateRouter.snapshot.pathFromRoot.forEach((item: ActivatedRouteSnapshot) => {
        //     if (item.url && item.url.length) {
        //         item.url.forEach(i => {
        //             urlList.push(i.path);
        //         });
        //     }
        // });

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
