import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/commons/services/subjects/loading.service';
import { agenciesImagesFolder } from '../../constants/agencies-icons-folder';
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
    if(localStorage.getItem('agenciesList'))
    {
      this.agenciesList = this.getAgenciesFromLocalStorage();
      this.loadingService.close();
    }
    else
    {
      this.httpAgenciesListService.getAgenciesList().subscribe(
        (result : IAgenciesListUI) => {
          localStorage.setItem('agenciesList', JSON.stringify(result.agenciesList));
          this.agenciesList = this.getAgenciesFromLocalStorage();
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

  private getAgenciesFromLocalStorage(): IAgencyUI[] {
    const agenciesListStorage = localStorage.getItem('agenciesList');
    let agenciesList = agenciesListStorage ? JSON.parse(agenciesListStorage) as IAgencyUI[] : [];
    agenciesList.forEach(agency => {
      agency.icon = this.generateIconNameRandomlyFrom1To20();
    });
    return agenciesList;
  }

  private generateIconNameRandomlyFrom1To20(): string {
    let iconName : string = agenciesImagesFolder;
    const iconNamePrefix: string = 'icon-agency-';
    const iconNameExtension: string = '.png';
    const maxRandomValue: number = 20;
    const randomValue = Math.floor(Math.random() * (maxRandomValue)) + 1;
    iconName = `${iconName}${iconNamePrefix}${randomValue}${iconNameExtension}`;
    return iconName;
  }
  
}
