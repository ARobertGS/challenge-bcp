import { Injectable } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IAgenciesListUI, IAgencyUI } from '../../model/ui/agencies-list.ui.interface';
import { map, Observable } from 'rxjs';
import { GenericBodyResponse } from 'src/app/commons/model/response/generic-response.interface';
import { EStatusResponse } from 'src/app/commons/enums/generic-status-response.enum';
import { EMessageError } from 'src/app/commons/enums/generic-message-error.enum';
import { AgenciesApiMethod } from '../../constants/agencies-api-methods.enum';
import { IAgencyResponse } from '../../model/response/agencies-list.response.interface';

@Injectable()
export class HttpAgenciesListService {

  constructor(
    private http: HttpClient,
  ) {}

  getAgenciesList(): Observable<IAgenciesListUI> {
    const url = `${environment.API_BASE}${AgenciesApiMethod.agenciesList}`;

    return this.http
      .get<GenericBodyResponse<IAgencyResponse[]>>(url, { params: {} })
      .pipe(
        map(response => {
          if (response.errorManager.status !== EStatusResponse.SUCCESS) {
            throw new Error(EMessageError.GENERIC);
          }

          let agenciesList: IAgencyUI[] = [];

          if (response.data) {
            agenciesList = response.data.map(agencie => {
              return {
                agency : agencie.agencia,
                district: agencie.distrito,
                province: agencie.provincia,
                department: agencie.departamento,
                address: agencie.direccion,
                lat: agencie.lat,
                lon: agencie.lon,
              };
            });
          }

          const dataAgencies: IAgenciesListUI = {
            agenciesList
          };

          return dataAgencies;
        }),
      );
  }
}
