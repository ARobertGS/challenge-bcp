import { NgModule } from '@angular/core';
import { HomeServiceModule } from './services/home-service.module';
import { CommonModule } from '@angular/common';
import { HomeComponentsModule } from './components/home-components.module';

@NgModule({
  imports: [
    CommonModule,
    HomeComponentsModule,
    HomeServiceModule,
  ],
  exports: [
    HomeServiceModule,
    HomeComponentsModule,
  ],
})
export class HomeCommonsModule {}
