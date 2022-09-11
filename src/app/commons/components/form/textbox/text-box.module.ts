import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextBoxComponent } from './text-box.component';
import { DirectiveModule } from '../../../directive/directive.module';

@NgModule({
  imports: [
    DirectiveModule,
    FormsModule,
    CommonModule,
  ],
  declarations: [
    TextBoxComponent,
  ],
  exports: [
    TextBoxComponent,
  ],
})
export class TextBoxModule { }
