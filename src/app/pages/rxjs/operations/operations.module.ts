import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateComponent} from './create/create.component';
import {OfFromComponent} from './of-from/of-from.component';
import {FromEventComponent} from './from-event/from-event.component';
import {SubjectComponent} from './subject/subject.component';


@NgModule({
    declarations: [
        CreateComponent, OfFromComponent, FromEventComponent, SubjectComponent
    ],
    imports: [
        CommonModule
    ]
})
export class OperationsModule {
}
