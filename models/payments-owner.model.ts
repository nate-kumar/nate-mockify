import { CorpAddressModel } from "./corp-address.model";

export interface PaymentsOwnerModel {
  id: string;
  name: string;
  address: CorpAddressModel;
}
