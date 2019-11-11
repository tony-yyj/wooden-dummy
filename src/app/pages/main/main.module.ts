import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { Routes, RouterModule } from '@angular/router';
import { MyDirective } from 'src/app/directives/my-directive.directive';

const router: Routes = [
    {
        path: '',
        component: IndexComponent,
    }
];

@NgModule({
    declarations: [
        IndexComponent,
        MyDirective,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(router),
    ]
})
export class MainModule { }
