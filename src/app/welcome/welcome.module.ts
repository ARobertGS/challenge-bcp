import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
// import { LoadingModule } from '../commons/components/ui/loading/loading.module';

@NgModule({
  declarations: [
    WelcomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    // LoadingModule,
  ],
  exports: [
    WelcomeComponent
  ],
})
export class WelcomeModule {}
