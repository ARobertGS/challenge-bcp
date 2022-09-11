import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '../commons/services/subjects/loading.service';
import { redirectByPathToAgenciesModuleAgencies } from '../workflows/agencies/commons/constants/agencies-routes';
// import { LoadingService } from '../commons/services/subjects/loading.service';

@Component({
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit, OnDestroy {

  constructor(
    private loadingService: LoadingService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadingService.open();
    setTimeout(() => {
      this.loadingService.close();
    }, 500);
  }

  ngOnDestroy(): void {
  }

  navigateToAgenciesModule(): void {
    this.loadingService.open();
    setTimeout(() => {
      this.router.navigateByUrl(redirectByPathToAgenciesModuleAgencies);
      this.loadingService.close();
    }, 1000);
    
  }

}
