import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const router: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule),
    },
    {
        path: 'rxjs',
        loadChildren: () => import('./pages/rxjs/rxjs.module').then(m => m.RxjsModule),
    },
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
