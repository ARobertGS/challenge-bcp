export interface IAPIGenericError {
  errorNumber: number;
  description: string;
  severity: number;
}

/*
 *@deprecated this interface was deprecated on services with v 1.0
 */
export interface IAPIOldGenericError {
  ErrorNumber: number;
  Description: string;
  Severity: number;
}
