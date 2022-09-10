import { NgModule } from '@angular/core';
import { HttpAgenciesListService } from './http/agencies-list.service';

@NgModule({
  providers: [
    HttpAgenciesListService,
  ],
})
export class AgenciesServicesModule { }
