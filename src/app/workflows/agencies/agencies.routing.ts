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
        loadChildren: () => import('./views/user/agencies-view.module').
        then(m => m.UserModule),
      },
      // {
      //   path: agenciesRoutes.createUser.path,
      //   canActivate: [AgenciesPageCreateUserGuard],
      //   loadChildren: agenciesRoutes.createUser.loadChildren,
      // },
      // {
      //   path: agenciesRoutes.updateUser.path,
      //   canActivate: [AgenciesPageEditUserGuard],
      //   loadChildren: agenciesRoutes.updateUser.loadChildren,
      // },
    ],
  },
];

export const agenciesRouterModule = RouterModule.forChild(routes);
