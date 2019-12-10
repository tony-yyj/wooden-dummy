import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateComponent} from './create/create.component';
import {OfFromComponent} from './of-from/of-from.component';
import {FromEventComponent} from './from-event/from-event.component';
import {SubjectComponent} from './subject/subject.component';
import {RouterModule, Routes} from '@angular/router';

const router: Routes = [
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
];

@NgModule({
    declarations: [
        CreateComponent, OfFromComponent, FromEventComponent, SubjectComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(router),
    ],
})
export class OperationsModule {
}
