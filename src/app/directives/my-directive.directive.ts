import { Directive, Input } from "@angular/core";

@Directive({
    selector: '[myDir]',
    exportAs: 'myDir',
})
export class MyDirective {
    @Input() id: number;

    constructor() {
        console.log('id', this.id);
    }

    logSomething() {
        console.log('id: ', this.id);
    }
}
