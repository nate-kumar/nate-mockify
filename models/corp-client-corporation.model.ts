import { CorpClientDetailsModel } from "./corp-client-corp-details.model";
import { CorpClientCorporationAddressModel } from "./corp-client-corporation-address.model";
import { IbanModel } from "./iban.model";
import { CorpLeiNumberModel } from "./corp-lei-number.model";
import { CorpMasterUserModel } from "./corp-master-user.model";


export interface CorpClientCorporationModel {
  id?: string;
  details: CorpClientDetailsModel;
  lei: CorpLeiNumberModel;
  addresses: CorpClientCorporationAddressModel;
  masterUser: CorpMasterUserModel;
  salesPersonUserId: string;
  isBranded: boolean;
  logoUrl: string;
  logoPreviewUrl: string;
  ibans?: IbanModel[];
}
