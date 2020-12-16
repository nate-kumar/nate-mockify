import { NeoDateModel } from "./neo-date.model";

export interface AgreementInfoModel {
  frameworkAgreementNumber: string;
  signingDate: NeoDateModel | Date;
}
