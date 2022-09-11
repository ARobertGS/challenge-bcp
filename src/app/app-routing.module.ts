import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { agenciesModuleRoutes } from './workflows/agencies/commons/constants/agencies-routes';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'challenge',
    component: HomeComponent,
    children: [
      {
        path: agenciesModuleRoutes.base.path,
        loadChildren: () => import('./workflows/agencies/agencies.module').then(m => m.AgenciesModule),
      },
      // {
      //   path: 'product-module',
      //   loadChildren: () => import('./features/product/product.module').then(m => m.ProductModule),
      // }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
