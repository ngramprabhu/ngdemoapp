import {Directive, ElementRef, HostListener, Renderer, Input} from '@angular/core';

//1. The Directive with selector, used for the property binding on DOM
//So used in []
@Directive({selector: '[textColor]'})
export class ColorDirective {
    //2. The Constructor, having the dependencies for
    //Directive to get execute
    //ElementRef for DOM element referrence
    //Renderer for Refreshing UI after the color is set
    constructor(private el : ElementRef, private renderer : Renderer) {}

    //3. Properties for init and set color
    //Decorated with @Input() to access values using 
    //Property-Binding 
    @Input()initColor : string;
    @Input('textColor') setColor:string;

    //4. The Logical function to perform functionality for Directive
    private setElementcolor(color: string) {
     this.renderer.setElementStyle(this.el.nativeElement, 
       'backgroundColor', color);
  }
   //5. Call this function when the Mouse-Enter event is listened
   @HostListener('mouseenter')  
   onMouseEnter(){
       this.setElementcolor(this.setColor || this.initColor || 'blue');
   }

  //6. Call this function when the Mouse-Leave event is listened
  @HostListener('mouseleave')  
   onMouseLeave(){
       this.setElementcolor(null);
   }
}
