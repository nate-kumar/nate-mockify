import { OrderCurrencyPercentModel } from "./order-currency-percent.model";
import { MtfFormErrorsObject } from "../pages/mtf-blotter/mtf-sidebar/mtf-approval-form/mtf-approval-form.component";

export class MtfPercentageInformationModel {
  commission: OrderCurrencyPercentModel;
  margin: OrderCurrencyPercentModel;
  warnings?: MtfFormErrorsObject[];
  matchedClientOrderId?: string;
  linkedClientOrderId?: string;
  swapCategory?: string;
}
