import { NgModule } from '@angular/core';
import { AgenciesComponent } from './agencies.component';
import { agenciesRouterModule } from './agencies.routing';
import { AgenciesCommonsModule } from './commons/agencies-commons.module';
import { AgenciesServicesModule } from './commons/services/agencies-services.module';

@NgModule({
  imports: [
    agenciesRouterModule,
    AgenciesCommonsModule,
    AgenciesServicesModule,
  ],
  declarations: [
    AgenciesComponent,
  ],
})
export class AgenciesModule { }
