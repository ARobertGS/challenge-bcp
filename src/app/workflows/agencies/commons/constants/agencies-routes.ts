import { Route } from '@angular/router';

interface IClientRoutes {
  base: Route;
  agencies: Route;
  agenciesDetail: Route;
}

export const agenciesModuleRoutes: IClientRoutes = {

  base: {
    path: 'agencies-module',
  },
  agencies: {
    path: 'agencies',
  },
  agenciesDetail: {
    path: 'agencies-detail:agency',
  },
};

export const redirectByPathToAgenciesModuleAgencies =
  `/challenge/${agenciesModuleRoutes.base.path}/${agenciesModuleRoutes.agencies.path}`;
  export const redirectByPathToAgenciesModuleAgenciesDetail =
  `/challenge/${agenciesModuleRoutes.base.path}/${agenciesModuleRoutes.agenciesDetail.path}`;

