import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
})
export class AppComponent {

    vData = {
        name: 'tony',
        email: 'tony@12.6com',
    };

    runtimes: number = 0;

    changeData() {
        this.vData.name = 'Stack';
    }

    getRuntimes() {
        this.runtimes ++;
        console.log('runtimes', this.runtimes);
    }

}
