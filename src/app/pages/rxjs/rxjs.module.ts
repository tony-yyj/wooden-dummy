import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { CreateComponent } from './operations/create/create.component';
import {RouterModule, Routes} from '@angular/router';
import { OfFromComponent } from './operations/of-from/of-from.component';
import {MatButtonModule, MatMenuModule} from '@angular/material';
import { RxjsComponent } from './rxjs/rxjs.component';
import { FromEventComponent } from './operations/from-event/from-event.component';
import { SubjectComponent } from './operations/subject/subject.component';
import {OperationsModule} from './operations/operations.module';
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
            },
            {
                path: 'subject',
                component: SubjectComponent,
            },
            {
                path: 'from-event',
                component: FromEventComponent,
            }
        ]
    },
];

@NgModule({
    declarations: [
        RxjsComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(router),
        MatButtonModule,
        MatMenuModule,
        OperationsModule,
    ]
})
export class RxjsModule {
}
