import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

// const routes: Routes = [
//     {
//         path: 'rxjs',
//         loadChildren: () => import('./pages/rxjs/rxjs.module').then(m => m.RxjsModule),
//     },
//     {
//         path: 'dynamic-form',
//         component: DynamicFormComponent,
//     }
// ];

const router:Routes = [
    {
        path: '',
        component: AppComponent,
    }
]
@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
