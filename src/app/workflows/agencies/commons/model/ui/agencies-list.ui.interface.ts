export interface IAgencyUI {
  agencyId: number;
  agency: string;
  district: string;
  province: string;
  department: string;
  address: string;
  lat: number;
  lon: number;
  icon?: string;
}

export interface IAgenciesListUI {
  agenciesList: IAgencyUI[];
}