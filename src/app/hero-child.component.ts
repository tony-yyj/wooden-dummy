import {Component, Input} from '@angular/core';
import {HeroInterface} from './interfaces/hero.interface';

@Component({
    selector: 'app-hero-child',
    template: `
        <h3>{{hero.name}} says:</h3>
        <p>I, {{hero.name}}, am at you service, {{masterName}}.</p>
    `
})
export class HeroChildComponent {
    @Input() hero: HeroInterface;
    @Input() masterName: string;
}

