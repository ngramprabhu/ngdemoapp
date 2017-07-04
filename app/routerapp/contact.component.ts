import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'contact-page',
    template: `<h1>{{Message}}</h1>`
})
export class ContactComponent implements OnInit {
    Message:string;
    constructor() {
        this.Message = 'This is Contact Page';
     }

    ngOnInit() { }
}