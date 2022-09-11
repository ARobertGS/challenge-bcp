import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PreloadAllModules, RouterModule } from '@angular/router';
// import { LoggerLevels } from '@everis/core';
import { AppComponent } from './app.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { GuardModule } from './commons/guards/guard.module';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { ServiceCommonModule } from './commons/services/services.common.module';
import { LoadingModule } from './commons/components/ui/loading/loading.module';
import { LoadingService } from './commons/services/subjects/loading.service';
import { ComponentCommonModule } from './commons/components/components.common.module';
import { AngularViewComponentsModule } from './commons/angular-view-components/angular-view-components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WelcomeModule } from './welcome/welcome.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HomeModule,
    GuardModule,
    ComponentCommonModule,
    // ToastModule.forRoot(),
    // RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    // NgbModule.forRoot(),
    // EvLoggerModule.forRoot({
    //   level: LoggerLevels.TRACE,
    //   serverLogLevel: LoggerLevels.OFF,
    // }),
    AngularViewComponentsModule,
    // Ng4LoadingSpinnerModule.forRoot(),
    // ServicesModule.forRoot(),
    ServiceCommonModule,
    LoadingModule,
    NgbModule,
    WelcomeModule,
  ],
  providers: [
    LoadingService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
