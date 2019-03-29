import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {APageComponent} from './a-page.component';
import {BPageComponent} from './b-page.component';
import {BOnePageComponent} from './b-one-page.component';
import {RouterModule, Routes} from '@angular/router';
import {IndexPageComponent} from './index-page.component';

const router: Routes = [
    {
        path: '',
        component: IndexPageComponent,
        children: [
            {
                path: 'a/:id',
                component: APageComponent,
            },
            {
                path: 'b',
                component: BPageComponent,
                children: [
                    {
                        path: 'b-1',
                        component: BOnePageComponent,
                    },
                ]
            }
        ],
    }
];

@NgModule({
    declarations: [
        APageComponent,
        BPageComponent,
        BOnePageComponent,
        IndexPageComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(router),
    ]
})
export class RouterTestModule {
}
