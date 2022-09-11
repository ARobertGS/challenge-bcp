import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { redirectByPathToAgenciesModuleAgencies } from '../../constants/agencies-routes';
import { IAgenciesListUI, IAgencyUI } from '../../model/ui/agencies-list.ui.interface';
import { HttpAgenciesListService } from '../../services/http/agencies-list.service';


@Component({
  selector: 'bcp-agencies-detail',
  templateUrl: './agencies-detail.component.html',
  styleUrls: ['./agencies-detail.component.scss'],
})
export class AgenciesDetailComponent implements OnInit, OnDestroy {

  agenciesList: IAgencyUI[] = [];

  constructor(
    private httpAgenciesListService: HttpAgenciesListService,
    private router: Router,
  ) {
    
  }

  ngOnInit() {
    this.getAgencies();
  }

  
  ngOnDestroy(): void {
    
  }

  getAgencies() {
    this.httpAgenciesListService.getAgenciesList().subscribe(
      (result : IAgenciesListUI) => {
        this.agenciesList = result.agenciesList;
      },
      error => {
        console.log('error on gencies-list.component - getAgencies', [error]);
      },
      () => {
        //Mostrar loading
      },
    );
  }

  navigateToAgencies(): void {
    this.router.navigateByUrl(redirectByPathToAgenciesModuleAgencies);
  }
  
}
