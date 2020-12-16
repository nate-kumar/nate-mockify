import { OrderCurrencyAmountModel } from "./order-currency-amount.model";

export interface OrderCurrencyAmountBaseModel {
  amountActual: OrderCurrencyAmountModel;
  amountBase: OrderCurrencyAmountModel;
  baseFixingRate?: number;
}
