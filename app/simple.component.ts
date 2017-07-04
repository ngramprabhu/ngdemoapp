import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'simple-data',
    template:`<h1>This is the Fisrt Angular 2 Application<h1>` 
})
export class SimpleComponent implements OnInit {
    //Accessed When the Component is instantiated
    constructor() { 
        console.log('Constructor Called');
    }

//Accessed when the component is initialized
    ngOnInit() {
        console.log('ngOnInit Called');
     }
}