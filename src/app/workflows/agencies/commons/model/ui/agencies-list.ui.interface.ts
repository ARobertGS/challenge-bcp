export interface IAgencyUI {
  agencyId: number;
  agency: string;
  district: string;
  province: string;
  department: string;
  address: string;
  lat: number;
  lon: number;
}

export interface IAgenciesListUI {
  agenciesList: IAgencyUI[];
}