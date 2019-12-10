import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MatButtonModule, MatMenuModule} from '@angular/material';
import {OperationsModule} from './operations/operations.module';
import {PracticeModule} from './practice/practice.module';
const router: Routes = [
    {
        path: '',
        redirectTo: 'create',
        pathMatch: 'full',
    },
];

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(router),
        MatButtonModule,
        MatMenuModule,
        OperationsModule,
        PracticeModule,
    ]
})
export class RxjsModule {
}
