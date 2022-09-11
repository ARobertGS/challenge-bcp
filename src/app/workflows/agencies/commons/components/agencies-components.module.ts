import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgenciesListComponent } from './agencies-list/agencies-list.component';
import { AgenciesDetailComponent } from './agencies-detail/agencies-detail.component';
import { AngularViewComponentsModule } from 'src/app/commons/angular-view-components/angular-view-components.module';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    AngularViewComponentsModule,
  ],
  declarations: [
    AgenciesListComponent,
    AgenciesDetailComponent,
  ],
  exports: [
    AgenciesListComponent,
    AgenciesDetailComponent,
  ],
  providers: [
  ],
})
export class AgenciesComponentModule { }
