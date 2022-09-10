import { Route } from '@angular/router';

interface IClientRoutes {
  base: Route;
  agencies: Route;
}

export const agenciesModuleRoutes: IClientRoutes = {

  base: {
    path: 'agencies-module',
  },
  agencies: {
    path: 'agencies',
  },
};

export const redirectByPathToAgenciesModuleAgencies =
  `/challenge/${agenciesModuleRoutes.base.path}/${agenciesModuleRoutes.agencies.path}`;

