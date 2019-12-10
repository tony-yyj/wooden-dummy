import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RxjsComponent} from './rxjs/rxjs.component';
import {MatButtonModule, MatMenuModule} from '@angular/material';
import {RouterModule} from '@angular/router';


@NgModule({
    declarations: [
        RxjsComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatMenuModule,
    ]
})
export class LayoutModule {
}
