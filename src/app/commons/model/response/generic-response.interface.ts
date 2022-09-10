import { IAPIGenericStatus } from "./api-generic-status.interface";

export interface GenericBodyResponse<T> {
  data: T;
  errorManager: IAPIGenericStatus;
}
