import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeroChildComponent} from './hero-child.component';
import {HeroParentComponent} from './hero-parent.component';
import {DynamicFormComponent} from './dynamic-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MyDirective } from './directives/my-directive.directive';
import { MainModule } from './pages/main/main.module';

@NgModule({
    declarations: [
        AppComponent,
        HeroChildComponent,
        HeroParentComponent,
        DynamicFormComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MainModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
