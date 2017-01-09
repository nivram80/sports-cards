import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{ appTitle }} Application</h1>
        <players></players>
    `
})

export class AppComponent {
    appTitle: string;

    constructor() {
        this.appTitle = 'Sports Cards';
    }

}
