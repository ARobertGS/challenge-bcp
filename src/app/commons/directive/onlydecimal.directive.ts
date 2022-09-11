import { ElementRef, HostListener, Directive, Input } from '@angular/core';

@Directive({
  selector: 'input[decimalOnly]',
})
export class OnlydecimalDirective {

  @Input() decimalOnlyActive = true;
  private regex: RegExp = new RegExp(/^\d*\.?\d{0,2}$/g);
  private specialKeys: Array<string> = [
    'Backspace',
    'Tab',
    'End',
    'Home',
    'ArrowLeft',
    'ArrowRight',
    'Delete',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
  ];

  constructor(
    private el: ElementRef,
  ) { }

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    if (this.decimalOnlyActive) {
      if (this.specialKeys.indexOf(event.key) !== -1) {
        return;
      }
      const current: string = this.el.nativeElement.value;
      const next: string = current.concat(event.key);
      if (next && !String(next).match(this.regex)) {
        event.preventDefault();
      }
    }
  }

  @HostListener('input', ['$event']) onInput(event: KeyboardEvent) {
    if (this.decimalOnlyActive) {
      const initalValue = this.el.nativeElement.value;
      this.el.nativeElement.value = initalValue.replace(/[^0-9.\s]*/g, '');
      if (initalValue !== this.el.nativeElement.value) {
        event.stopPropagation();
      }
    }
  }

}
