import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgenciesListComponent } from './agencies-list/agencies-list.component';
import { AgenciesDetailComponent } from './agencies-detail/agencies-detail.component';
import { AngularViewComponentsModule } from 'src/app/commons/angular-view-components/angular-view-components.module';
import { ComponentCommonModule } from 'src/app/commons/components/components.common.module';
import { PipeCommonModule } from 'src/app/commons/pipe/pipe-common.module';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    AngularViewComponentsModule,
    ComponentCommonModule,
    PipeCommonModule,
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
