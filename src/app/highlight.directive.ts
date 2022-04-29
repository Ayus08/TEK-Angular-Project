import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
// directives gives functionality to the html elements, so we need the element to 
// implement the functionality.

  constructor(private elem: ElementRef) {
    console.log("Element we got ", this.elem.nativeElement)
   // this.elem.nativeElement.style.color = "yellow"
   }

}
