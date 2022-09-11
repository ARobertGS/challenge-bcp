export interface IAgencyDetailUI {
  agency: string;
  district: string;
  province: string;
  department: string;
  address: string;
  agencyMap: IAgencyMapUI;
}

export interface IAgencyMapUI {
  agencyMapTitle: string
  agencyMapPosition: IAgencyMapPositionUI;
  agencyMapLabel: IAgencyMapLabelUI,
}

export interface IAgencyMapPositionUI {
  lat: number;
  lng: number;
}

export interface IAgencyMapLabelUI {
  color: string;
  text: string;
}

