import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'rxjs',
        pathMatch: 'full',
    },
    {
        path: 'rxjs',
        loadChildren: './rxjs/rxjs.module#RxjsModule',
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
