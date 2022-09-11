import { NgModule } from '@angular/core';
import { ComponentCommonModule } from 'src/app/commons/components/components.common.module';
import { AgenciesCommonsModule } from '../../commons/agencies-commons.module';
import { AgenciesDetailViewComponent } from './agencies-detail-view.component';
import { agenciesDetailViewRouterModule } from './agencies-detail-view.routing';

@NgModule({
  imports: [
    agenciesDetailViewRouterModule,
    ComponentCommonModule,
    AgenciesCommonsModule,
  ],
  exports: [
    AgenciesDetailViewComponent,
  ],
  declarations: [
    AgenciesDetailViewComponent,
  ],
})
export class AgenciesDetailModule { }
