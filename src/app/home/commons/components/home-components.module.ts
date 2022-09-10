import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentCommonModule } from 'src/app/commons/components/components.common.module';

@NgModule({
  declarations: [
    HomeHeaderComponent,
    HomeMenuComponent,
  ],
  exports: [
    HomeHeaderComponent,
    HomeMenuComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ComponentCommonModule,
  ],
  entryComponents: [
  ],
})
export class HomeComponentsModule {}
