export interface IAPIGenericStatus {
  status: number;
  message: string;
  errors: IAPIGenericStatusError[];
}

export interface IAPIGenericStatusError {
  errorNumber: number;
  description: string;
}
