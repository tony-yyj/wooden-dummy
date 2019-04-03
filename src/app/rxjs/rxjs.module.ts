import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { CreateComponent } from './create/create.component';
import {RouterModule, Routes} from '@angular/router';
import { OfFromComponent } from './of-from/of-from.component';

const router: Routes = [
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
];

@NgModule({
    declarations: [CreateComponent, OfFromComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(router),
    ]
})
export class RxjsModule {
}
