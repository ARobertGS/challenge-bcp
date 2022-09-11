import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { redirectByPathToAgenciesModuleAgencies } from '../../constants/agencies-routes';
import { IAgencyUI } from '../../model/ui/agencies-list.ui.interface';
import { IAgencyDetailUI } from '../../model/ui/agency-detail.ui.interface';


@Component({
  selector: 'bcp-agencies-detail',
  templateUrl: './agencies-detail.component.html',
  styleUrls: ['./agencies-detail.component.scss'],
})
export class AgenciesDetailComponent implements OnInit, OnDestroy {

  agency: IAgencyDetailUI = {
    agency:'',
    district: '',
    province: '',
    department: '',
    address: '',
    agencyMap: {
      agencyMapTitle: '',
      agencyMapPosition: {
        lat: 0,
        lng: 0,
      },
      agencyMapLabel: {
        color: '',
        text: '',
      },
    }
  };
  // = {
  //   agency: 'agency',
  //   district: 'district',
  //   province: 'province',
  //   department: 'department',
  //   address: 'address',
  //   lat: -77.01232817,
  //   lon: -12.0046896
  // };
  // position = {
  //   lat: -34.681,
  //   lng: -58.371
  // };

  // label = {
  //   color: 'red',
  //   text: 'marcador'
  // };

  private routeParamsSubs = new Subscription();

  constructor(
    private router: Router,
    private routeParams: ActivatedRoute,
  ) {
    this.routeParamsSubs = this.routeParams.params.subscribe((params) => {
      if (params['agency']) {
        this.agency = {
          agency: params['agency'],
          district: params['district'],
          province: params['province'],
          department: params['department'],
          address: params['address'],
          agencyMap: {
            agencyMapTitle: '',
            agencyMapPosition: {
              lat: Number.parseFloat(params['lat']),
              lng: Number.parseFloat(params['lon']),
            },
            agencyMapLabel: {
              color: 'red',
              text: 'marcador',
            },
          }
        };
        console.log(this.agency);
      }
    });
  }

  ngOnInit() {
  }

  
  ngOnDestroy(): void {
    this.routeParamsSubs.unsubscribe();
  }


  navigateToAgencies(): void {
    this.router.navigateByUrl(redirectByPathToAgenciesModuleAgencies);
  }
  
}
