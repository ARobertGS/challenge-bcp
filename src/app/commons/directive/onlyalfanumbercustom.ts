import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'input[alfanumberOnlyCustom]',
})
export class OnlyalfanumberCustomDirective {

  @Input() alfanumberOnlyCustomActive = true;

  constructor(private _el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event: any) {
    if (this.alfanumberOnlyCustomActive) {
      this._el.nativeElement.value = this._el.nativeElement.value.toString().toUpperCase();
      const initalValue = this._el.nativeElement.value;
      this._el.nativeElement.value = initalValue.replace(/[^a-zA-Z0-9-\s]*/g, '');
      if (initalValue !== this._el.nativeElement.value) {
        event.stopPropagation();
      }
    }
  }

}
