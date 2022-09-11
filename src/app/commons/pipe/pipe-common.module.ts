import { NgModule } from '@angular/core';
import { ShowErrorModule } from './show-error/show-error.module';

@NgModule({
  imports: [
    ShowErrorModule,
  ],
  exports: [
    ShowErrorModule,
  ],
})
export class PipeCommonModule { }
