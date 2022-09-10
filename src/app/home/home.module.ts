import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCommonsModule } from './commons/home-commons.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
// import { LoadingModule } from '../commons/components/ui/loading/loading.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeCommonsModule,
    // LoadingModule,
  ],
  exports: [
    HomeCommonsModule,
    HomeComponent,
  ],
})
export class HomeModule {}
