import { Routes, RouterModule } from '@angular/router';
import { agenciesModuleRoutes } from './commons/constants/agencies-routes';
import { AgenciesComponent } from './agencies.component';

const routes: Routes = [
  {
    path: '',
    component: AgenciesComponent,
    children: [
      {
        path: agenciesModuleRoutes.agencies.path,
        loadChildren: () => import('./views/agencies-view/agencies-view.module').
        then(m => m.AgenciesModule),
      },
      {
        path: agenciesModuleRoutes.agenciesDetail.path,
        loadChildren: () => import('./views/agencies-detail-view/agencies-detail-view.module').
        then(m => m.AgenciesDetailModule),
      },
    ],
  },
];

export const agenciesRouterModule = RouterModule.forChild(routes);
