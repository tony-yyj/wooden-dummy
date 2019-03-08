import {TestBed, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {HeroParentComponent} from './hero-parent.component';
import {HeroChildComponent} from './hero-child.component';
import {HeroInterface} from './interfaces/hero.interface';
import {HEROES} from './hero';

describe('AppComponent', () => {

    let component: AppComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                AppComponent,
                HeroParentComponent,
                HeroChildComponent,
            ],
        }).compileComponents();
        const fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
    }));

    it('should create the app', () => {
        expect(component).toBeTruthy();
    });

    it(`should have as title 'wooden-dummy'`, () => {
        expect(component.title).toEqual('wooden-dummy');
    });

    it('should pass properties to children properly', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const heroes: HeroInterface[] = HEROES;
        const masterName: string = 'Master';
        const el: HTMLElement = fixture.nativeElement;
        const parent = el.querySelector('app-hero-parent');
        const child = parent.querySelector('app-hero-child');
        console.log('child', child);
        for (let i = 0; i < heroes.length; i ++) {
            const childTitle = child[i].querySelector('h3');
            // {{hero.name}} says:
            expect(childTitle.textContent).toContain(heroes[i].name + ' says:');
        }
    });
});
