import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/commons/services/subjects/loading.service';
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
    private loadingService: LoadingService,
  ) {
    console.log('agencies list component');
  }

  ngOnInit() {
    this.getAgencies();
  }

  
  ngOnDestroy(): void {
    
  }

  getAgencies() {
    this.loadingService.open();
    const agenciesListStorage = localStorage.getItem('agenciesList');
    if(agenciesListStorage)
    {
      this.agenciesList = JSON.parse(agenciesListStorage) as IAgencyUI[];
      this.loadingService.close();
    }
    else
    {
      this.httpAgenciesListService.getAgenciesList().subscribe(
        (result : IAgenciesListUI) => {
          this.agenciesList = result.agenciesList;
          localStorage.setItem('agenciesList', JSON.stringify(this.agenciesList));
        },
        error => {
          console.log('error on agencies-list.component - getAgencies', [error]);
          this.loadingService.close();
        },
        () => {
          this.loadingService.close();
        },
      );
    }
  }

  editAgency(agency: IAgencyUI): void {
    this.router.navigate([redirectByPathToAgenciesModuleAgenciesDetail, agency]);
  }

  addAgency(): void {
    this.router.navigate([redirectByPathToAgenciesModuleAgenciesDetail]);
  }
  
}
