import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DragBoxComponent} from './drag-box/drag-box.component';
import {RouterModule, Routes} from '@angular/router';

const router: Routes = [
    {
        path: 'drag-box',
        component: DragBoxComponent,
    }
];

@NgModule({
    declarations: [
        DragBoxComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(router),
    ]
})
export class PracticeModule {
}
