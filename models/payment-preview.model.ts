import { PaymentDisplayTypes } from "../_enums/payment-display.enum";

export interface IPaymentDisplayModel {
  field: string;
  type?: PaymentDisplayTypes;
  rateFields?: string[];
  translationPrefix?: string;
  hiddenUntilRequested?: boolean;
  nestedField?: string;
}
