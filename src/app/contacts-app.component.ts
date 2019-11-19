import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-contacts-app',
    template: `
    <p>
      contacts-app works!
      {{vData.name}}{{vData.email}}
    </p>
  `,
    styles: []
})
export class ContactsAppComponent implements OnInit {

    @Input() vData: {name: string, email: string};

    constructor(
        private httpClient: HttpClient,
    ) { }

    ngOnInit() {
    }

}
