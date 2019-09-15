import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { CreateComponent } from './create/create.component';
import {RouterModule, Routes} from '@angular/router';
import { OfFromComponent } from './of-from/of-from.component';
import {MatButtonModule, MatMenuModule} from '@angular/material';
import { RxjsComponent } from './rxjs/rxjs.component';
const router: Routes = [
    {
        path: '',
        component: RxjsComponent,
        children: [
            {
                path: '',
                redirectTo: 'create',
                pathMatch: 'full',
            },
            {
                path: 'create',
                component: CreateComponent,
            },
            {
                path: 'of-from',
                component: OfFromComponent,
            }
        ]
    },
];

@NgModule({
    declarations: [CreateComponent, OfFromComponent, RxjsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(router),
        MatButtonModule,
        MatMenuModule,
    ]
})
export class RxjsModule {
}