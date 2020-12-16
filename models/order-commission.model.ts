import { OrderCurrencyAmountBaseModel } from "./order-currency-amount-base.model";

export interface OrderCommissionModel extends OrderCurrencyAmountBaseModel {
  commissionPcnt: number;
}
