import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{ appTitle }} Application</h1>
        <router-outlet></router-outlet>
    `
})

export class AppComponent {
    appTitle: string;

    constructor() {
        this.appTitle = 'Sports Cards';
    }

}
