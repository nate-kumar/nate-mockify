import { OrderCurrencyAmountModel } from "./order-currency-amount.model";

export interface OrderTradeLimitModel {
  max: OrderCurrencyAmountModel;
  min: OrderCurrencyAmountModel;
}
