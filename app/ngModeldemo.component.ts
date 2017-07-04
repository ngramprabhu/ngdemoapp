import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'model-demo',
    templateUrl: './app/ngModeldemo.html'
})
export class NgModelDemoComponent implements OnInit {
    header:string;
    name:string;
    constructor() { 
        this.name  = "Mahesh";
        this.header = 'The Property and Two-way Binding Demo with Interpolation {{}}';
    }

    ngOnInit() { }
}