import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-custom-directive',
    template:`
       <h1>My Custom Directive</h1>
       <h2>Please select color from options</h2>
       <hr>
       <div>
         <input type="radio" name='c' (click)="color='yellow'">Yellow
         <input type="radio" name='c' (click)="color='green'">Green
         <input type="radio" name='c' (click)="color='cyan'">Cyan
       </div>
       <hr>
       <p [textColor]="color">
         Hay! Set My Color
       </p> 
       <hr>
       <p [textColor]="color" initColor="magenta">
         Hay! I am already having color 
       </p>
    `
})
export class TestDirectiveComponent implements OnInit {
    color:string;
    constructor() { }

    ngOnInit() { }
}