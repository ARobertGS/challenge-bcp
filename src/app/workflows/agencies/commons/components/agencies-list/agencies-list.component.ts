import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { redirectByPathToAgenciesModuleAgenciesDetail } from '../../constants/agencies-routes';
import { IAgenciesListUI, IAgencyUI } from '../../model/ui/agencies-list.ui.interface';
import { HttpAgenciesListService } from '../../services/http/agencies-list.service';


@Component({
  selector: 'bcp-agencies-list',
  templateUrl: './agencies-list.component.html',
  styleUrls: ['./agencies-list.component.scss'],
})
export class AgenciesListComponent implements OnInit, OnDestroy {

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

  navigateToDetail(): void {
    this.router.navigateByUrl(redirectByPathToAgenciesModuleAgenciesDetail);
  }
  
}
