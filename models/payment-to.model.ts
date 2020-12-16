import { PaymentAccountModel } from "./payment-account.model";

export class PaymentToModel {
  accountType: string;
  account: PaymentAccountModel;
  amount: number;
  currency: string;
  paymentPurpose: string;
  paymentPurposeOther: string;
  paymentReference: string;
  paymentTag: string;
  paymentNetwork: string;
  paymentCharge: string;
  ibanId?: string;
  indicativeCost: number;
}
