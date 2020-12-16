import { CorpClientDetailsModel } from "./corp-client-corp-details.model";
import { CorpAddressModel } from "./corp-address.model";
import { CorpMasterUserModel } from "./corp-master-user.model";
import { CorpLeiNumberModel } from "./corp-lei-number.model";

export interface CorpClientCorporationModel {
  id?: string;
  details: CorpClientDetailsModel;
  lei: CorpLeiNumberModel;
  addresses: {
    billingSameAsPrimary: boolean;
    primary: CorpAddressModel;
    billing?: CorpAddressModel;
  };
  masterUser: CorpMasterUserModel;
  salesPersonUserId: string;
  isBranded: boolean;
  logoUrl: string;
  logoPreviewUrl: string;
}
