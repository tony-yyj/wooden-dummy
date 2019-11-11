import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DynamicFormComponent} from './dynamic-form.component';

const routes: Routes = [
    {
        path: 'rxjs',
        loadChildren: () => import('./pages/rxjs/rxjs.module').then(m => m.RxjsModule),
    },
    {
        path: 'dynamic-form',
        component: DynamicFormComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
