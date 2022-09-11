import { AbstractControl, ValidatorFn } from '@angular/forms';

export function validateAlphaNumericWithSpaces(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: boolean} => {
    const regExp = new RegExp(/[^a-zA-Z0-9\s]*/g);
    if (control.value) {
      const test = regExp.test(control.value);
      if (!test || control.value.toString().trim().length === 0) {
        return { pattern: true };
      } else {
        return {};
      }
    } else {
      return {};
    }
  };
}
