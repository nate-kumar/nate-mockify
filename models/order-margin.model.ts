import { OrderCurrencyAmountModel } from "./order-currency-amount.model";

export interface OrderMarginModel {
  value: OrderCurrencyAmountModel;
  percent: number;
}
