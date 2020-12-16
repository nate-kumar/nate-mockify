import { OrderCurrencyAmountBaseModel } from "./order-currency-amount-base.model";
import { OrderCurrencyAmountModel } from "./order-currency-amount.model";
import { DateModel } from "./date.model";
import { OrderRateModel } from "./order-rate.model";

export interface OrderM2MModel extends OrderCurrencyAmountBaseModel {
  fairValue: OrderCurrencyAmountModel;
  m2mValue: OrderCurrencyAmountModel;
  lastUpdate: DateModel | string;
  rateM2m: OrderRateModel;
  rateM2mLp: OrderRateModel;
}
