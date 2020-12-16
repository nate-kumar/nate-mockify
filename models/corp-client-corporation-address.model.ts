import { CorpAddressModel } from "./corp-address.model";

export interface CorpClientCorporationAddressModel {
  billingSameAsPrimary: boolean;
  primary: CorpAddressModel;
  billing?: CorpAddressModel;
}
