import { OrderCurrencyAmountBaseModel } from "./order-currency-amount-base.model";

export interface NeoCommissionModel extends OrderCurrencyAmountBaseModel {
  commissionPcnt: number;
}
