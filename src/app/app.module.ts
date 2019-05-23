import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeroChildComponent} from './hero-child.component';
import {HeroParentComponent} from './hero-parent.component';
import {RouterTestModule} from './router-test/router-test.module';
import {DynamicFormComponent} from './dynamic-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        HeroChildComponent,
        HeroParentComponent,
        DynamicFormComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterTestModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
