///<reference path="../../../../../../../node_modules/@types/googlemaps/index.d.ts">

import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Renderer2 } from '@angular/core';
// import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ETypeTextbox } from 'src/app/commons/components/form/textbox/text-box.component';
import { redirectByPathToAgenciesModuleAgencies } from '../../constants/agencies-routes';
import { IAgencyUI } from '../../model/ui/agencies-list.ui.interface';
import { IAgencyDetailUI } from '../../model/ui/agency-detail.ui.interface';
import { addressControlMapError, agencyControlMapError, departmentControlMapError, districtControlMapError, latControlMapError, lonControlMapError, provinceControlMapError } from './agencies-detail.message-errors';
import { AgenciesDetailPresenter } from './agencies-detail.presenter';

@Component({
  selector: 'bcp-agencies-detail',
  templateUrl: './agencies-detail.component.html',
  styleUrls: ['./agencies-detail.component.scss'],
})
export class AgenciesDetailComponent implements OnInit, OnDestroy {

  @ViewChild('divMap') divMap!: ElementRef;
  @ViewChild('inputPlaces') inputPlaces!: ElementRef;

  mapa!: google.maps.Map;
  markers!: google.maps.Marker[];
  // formMapa!: FormGroup;

  isEditMode: boolean = false;
  agencyId: number = 0;
  eTypeTextbox = ETypeTextbox;

  agencyControlMapError = agencyControlMapError;
  districtControlMapError = districtControlMapError;
  provinceControlMapError = provinceControlMapError;
  departmentControlMapError = departmentControlMapError;
  addressControlMapError = addressControlMapError;
  latControlMapError = latControlMapError;
  lonControlMapError = lonControlMapError;

  agency: IAgencyDetailUI = {
    agencyId: 0,
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
        color: 'red',
        text: 'Direcci??n',
      },
    }
  };

  private routeParamsSubs = new Subscription();

  constructor(
    public agenciesDetailPresenter: AgenciesDetailPresenter,
    private router: Router,
    private routeParams: ActivatedRoute,
    private rendered2: Renderer2,
  ) {
    console.log('agencies detail component');

    this.agenciesDetailPresenter.disabledLatControl();
    this.agenciesDetailPresenter.disabledLonControl();
    this.routeParamsSubs = this.routeParams.params.subscribe((params) => {
      if (params['agency']) {
        this.isEditMode = true;
        this.agencyId =  Number.parseInt(params['agencyId']);
        this.agenciesDetailPresenter.disabledAgencyControl();
        this.agenciesDetailPresenter.agencyControl.setValue(params['agency']);
        this.agenciesDetailPresenter.districtControl.setValue(params['district']);
        this.agenciesDetailPresenter.provinceControl.setValue(params['province']);
        this.agenciesDetailPresenter.departmentControl.setValue(params['department']);
        this.agenciesDetailPresenter.addressControl.setValue(params['address']);
        this.agenciesDetailPresenter.latControl.setValue(params['lat']);
        this.agenciesDetailPresenter.lonControl.setValue(params['lon']);

        this.agency = {
          agencyId: params['agencyId'],
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
              text: 'Direcci??n',
            },
          }
        };
        console.log(this.agency);
      }
      else {
        this.agenciesDetailPresenter.enabledAgencyControl();
      }
    });

    this.markers = [];
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.agenciesDetailPresenter.resetForm();
    this.routeParamsSubs.unsubscribe();
  }

  validateAgency() {
    if (this.agenciesDetailPresenter.agenciesDetailForm.valid) {
      const agency: IAgencyUI = {
        agencyId: this.agencyId,
        agency: this.agenciesDetailPresenter.agencyControl.value || '',
        district: this.agenciesDetailPresenter.districtControl.value || '',
        province: this.agenciesDetailPresenter.provinceControl.value || '',
        department: this.agenciesDetailPresenter.departmentControl.value || '',
        address: this.agenciesDetailPresenter.addressControl.value || '',
        lat: this.agenciesDetailPresenter.latControl.value ? 
              Number.parseFloat(this.agenciesDetailPresenter.latControl.value) : 0,
        lon: this.agenciesDetailPresenter.lonControl.value ?
              Number.parseFloat(this.agenciesDetailPresenter.lonControl.value) : 0,
      };

      this.updateLocalStorage(agency);
    } else {
      this.agenciesDetailPresenter.showError = true;
    }
  }

  updateLocalStorage(agency: IAgencyUI): void {
    const agenciesListStorage = localStorage.getItem('agenciesList');
    let agenciesList = agenciesListStorage ? JSON.parse(agenciesListStorage) as IAgencyUI[] : [];
    if(this.isEditMode)
    {
      agenciesList.forEach(agencyToEdit => {
        if(agencyToEdit.agencyId === agency.agencyId)
        {
          agencyToEdit.agency = agency.agency;
          agencyToEdit.district = agency.district;
          agencyToEdit.province = agency.province;
          agencyToEdit.department = agency.department;
          agencyToEdit.address = agency.address;
          agencyToEdit.lat = agency.lat;
          agencyToEdit.lon = agency.lon;
        }
      });
    }
    else 
    {
      const agencyIdList: number[] = agenciesList.map(agency => agency.agencyId);
      let agencyIdMaxValue = agencyIdList.length > 0 ? Math.max(...agencyIdList) : 0;
      agency.agencyId = ++agencyIdMaxValue;
      agenciesList.push(agency);
    }
    // Actualizamos el localStorage
    localStorage.setItem('agenciesList', JSON.stringify(agenciesList));
    this.navigateToAgencies();
  }

  navigateToAgencies(): void {
    this.router.navigateByUrl(redirectByPathToAgenciesModuleAgencies);
  }


  ngAfterViewInit() : void
  {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const latitudeToMap: number = this.isEditMode ? 
                                      this.agency.agencyMap.agencyMapPosition.lat : position.coords.latitude;
        const longitudeToMap: number = this.isEditMode ? 
                                      this.agency.agencyMap.agencyMapPosition.lng : position.coords.longitude;
        await this.loadMap(latitudeToMap, longitudeToMap);
        this.loadAutocomplete();
      });
    }
    else
    {
      console.log('El navegador es incompativle con la geolocalizacion');
    }
  }

  loadMap(latitude: number, longitude: number) {
    const options: google.maps.MapOptions = {
      center: new google.maps.LatLng(latitude, longitude),
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    this.mapa = new google.maps.Map(this.rendered2.selectRootElement(this.divMap.nativeElement), options);
    const markerPosition = new google.maps.Marker({
      position: this.mapa.getCenter(),
      title: 'Direcci??n'
    });
    markerPosition.setMap(this.mapa);
    this.markers.push(markerPosition);
    // Logica para llenar inputs lat y lng
    this.agenciesDetailPresenter.latControl.setValue(latitude.toString());
    this.agenciesDetailPresenter.lonControl.setValue(longitude.toString());
  }

  loadAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(this.rendered2.selectRootElement(this.inputPlaces.nativeElement), 
    {
      componentRestrictions: {
        country: 'PE',
      },
      fields: ['address_components','geometry'],
      types: ['address']
    });

    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const place: any = autocomplete.getPlace();
      const address: string = place.address_components[1].long_name + ' ' + place.address_components[0].long_name;
      const district: string = place.address_components[3].long_name;
      const province: string = place.address_components[4].long_name;
      const department: string = place.address_components[5].long_name;
      this.mapa.setCenter(place.geometry.location);

      const marker = new google.maps.Marker({
        position: place.geometry.location,
      });
      this.deleteMarkersFromMap();
      marker.setMap(this.mapa);
      this.markers.push(marker);

      // Logica para llenar inputs lat y lng
      this.agenciesDetailPresenter.latControl.setValue(place.geometry.location.lat());
      this.agenciesDetailPresenter.lonControl.setValue(place.geometry.location.lng());
    });
  }

  deleteMarkersFromMap() {
    for (var i = 0; i < this.markers.length; i++) {
        this.markers[i].setMap(null);
    }
    this.markers = [];
  };

}
