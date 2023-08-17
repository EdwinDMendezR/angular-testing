import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlgthDirective implements OnChanges {

  defaultcolor = 'gray';
  @Input('highlight') bgcolor = '';

  constructor(
    private element: ElementRef
  ) {
    this.element.nativeElement.style.backgroundColor = this.defaultcolor;
  }

  ngOnChanges(): void {
    this.element.nativeElement.style.backgroundColor = this.bgcolor || this.defaultcolor;
  }

}
