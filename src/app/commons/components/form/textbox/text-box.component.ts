import { Component, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export enum ETypeTextbox {
  ONLY_NUMBER = 'onlyNumber',
  ONLY_DECIMAL = 'decimalOnly',
  ALPHANUMERIC_WITH_SPACE_AND_DASH = 'ALPHANUMERIC_WITH_SPACE_AND_DASH',
}

@Component({
  selector: 'bcp-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextBoxComponent),
      multi: true,
    },
  ],
})
export class TextBoxComponent implements ControlValueAccessor {

  @Input() type = '';
  @Input() maxlength = '';
  @Input() placeholder = '';
  @Input() error = '';
  @Input() label = '';
  @Input() disabled = false;
  @Input() symbol = '';
  @Output() blur = new EventEmitter<string>();
  @Output() input = new EventEmitter<string>();
  currentValue = '';
  typeTextBox = ETypeTextbox;
  private onChange = (_value: string) => { };
  private onTouched = () => { };

  writeValue(value: string): void {
    this.currentValue = value;
    this.onChange(value);
    this.onTouched();
  }

  registerOnChange(fn: (_value: string) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  valueChange(value: string) {
    if (!this.disabled) {
      this.writeValue(value);
    }
  }

  blurEvent(event: any) {
    this.blur.emit(event.target.value);
  }

  inputEvent(event: any) {
    this.input.emit(event.target.value);
  }

}
