import { DateModel } from "./date.model";

export interface AgreementInfoModel {
  frameworkAgreementNumber: string;
  signingDate: DateModel | Date;
}
