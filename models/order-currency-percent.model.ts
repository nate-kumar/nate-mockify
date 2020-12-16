import { OrderCurrencyAmountModel } from "./order-currency-amount.model";

export interface OrderCurrencyPercentModel extends OrderCurrencyAmountModel {
  percent: number;
}
