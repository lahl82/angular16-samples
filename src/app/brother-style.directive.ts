import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBrotherStyle]'
})
export class BrotherStyleDirective {

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = '#023047'
    this.element.nativeElement.style.color = '#e9c46a'
  }

}
