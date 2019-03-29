import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeroChildComponent} from './hero-child.component';
import {HeroParentComponent} from './hero-parent.component';
import {RouterTestModule} from './router-test/router-test.module';

@NgModule({
    declarations: [
        AppComponent,
        HeroChildComponent,
        HeroParentComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterTestModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
