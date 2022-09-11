import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextBoxModule } from './form/textbox/text-box.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    TextBoxModule,
  ],
  exports: [
    TextBoxModule,
  ],
  providers: [
  ],
})
export class ComponentCommonModule { }
