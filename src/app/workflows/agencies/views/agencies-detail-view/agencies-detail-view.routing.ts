import { RouterModule, Routes } from '@angular/router';
import { AgenciesDetailViewComponent } from './agencies-detail-view.component';

const routes: Routes = [
  { path: '', component: AgenciesDetailViewComponent },
];

export const agenciesDetailViewRouterModule = RouterModule.forChild(routes);
