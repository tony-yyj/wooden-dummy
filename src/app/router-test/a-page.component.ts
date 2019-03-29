import {Component, OnInit} from '@angular/core';

@Component({
    template: `
        <h2>A Page</h2>
    `,
})
export class APageComponent implements OnInit {
    ngOnInit(): void {
       console.log('A page');
    }
}
