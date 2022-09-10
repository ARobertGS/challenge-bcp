import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgenciesListComponent } from './users-list/agencies-list.component';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AgenciesListComponent,
  ],
  exports: [
    AgenciesListComponent,
  ],
  providers: [
  ],
})
export class AgenciesComponentModule { }
