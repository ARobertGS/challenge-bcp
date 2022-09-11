import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'showerror' })
export class ShowErrorPipe implements PipeTransform {

  transform(error: any, mapError: object, showError: boolean = true): string {
    let messageError = '';

    if (showError) {
      messageError = this.mappingMessageErrors(error, mapError);
    }

    return messageError;
  }

  private mappingMessageErrors(error: object, mapError: any): string {
    let onlyMessageError = '';

    if (error) {
      Object.keys(error).forEach((key) => {
        if (mapError[key]) {
          onlyMessageError = mapError[key];
        }
      });
    }

    return onlyMessageError;
  }

}
