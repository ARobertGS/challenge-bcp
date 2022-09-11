import { NgModule } from '@angular/core';
import { AgenciesDetailPresenter } from '../components/agencies-detail/agencies-detail.presenter';
import { HttpAgenciesListService } from './http/agencies-list.service';

@NgModule({
  providers: [
    HttpAgenciesListService,
    AgenciesDetailPresenter,
  ],
})
export class AgenciesServicesModule { }
