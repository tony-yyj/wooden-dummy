import {Component, OnInit} from '@angular/core';
import {HeroInterface} from './interfaces/hero.interface';
import {HEROES} from './hero';

@Component({
    selector: 'app-hero-parent',
    template: `
        <h2>{{master}} controls {{heroes.length}} heroes.</h2>
        <app-hero-child
            *ngFor="let hero of heroes"
            [hero]="hero"
            [masterName]="master"
        ></app-hero-child>
    `
})
export class HeroParentComponent implements OnInit {
    heroes: HeroInterface[];
    master: string = 'Master';

    ngOnInit(): void {
        console.log('heroes', HEROES);
        this.heroes =  HEROES;
    }
}
