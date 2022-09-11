import { NgModule } from '@angular/core';
import { ComponentCommonModule } from 'src/app/commons/components/components.common.module';
import { AgenciesCommonsModule } from '../../commons/agencies-commons.module';
import { AgenciesViewComponent } from './agencies-view.component';
import { agenciesViewRouterModule } from './agencies-view.routing';

@NgModule({
  imports: [
    agenciesViewRouterModule,
    ComponentCommonModule,
    AgenciesCommonsModule,
  ],
  exports: [
    AgenciesViewComponent,
  ],
  declarations: [
    AgenciesViewComponent,
  ],
})
export class AgenciesModule { }
