import { PaymentDisplayTypes } from "../_enums/payment-display.enum";

export interface PaymentDisplayModel {
  field: string;
  type?: PaymentDisplayTypes;
  rateFields?: string[];
  translationPrefix?: string;
  hiddenUntilRequested?: boolean;
  nestedField?: string;
}
