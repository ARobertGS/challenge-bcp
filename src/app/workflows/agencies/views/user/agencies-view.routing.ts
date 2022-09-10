import { RouterModule, Routes } from '@angular/router';
import { AgenciesViewComponent } from './agencies-view.component';

const routes: Routes = [
  { path: '', component: AgenciesViewComponent },
];

export const agenciesViewRouterModule = RouterModule.forChild(routes);
