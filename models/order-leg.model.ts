import { OrderCurrencyAmountBaseModel } from "./order-currency-amount-base.model";
import { PaymentAccountModel } from "./payment-account.model";
import { PaymentToModel } from "./payment-to.model";
import { DateModel } from "./date.model";
import { OrderRateModel } from "./order-rate.model";
import { OrderMarginModel } from "./order-margin.model";
import { SimpleDueDateEnum } from "../_enums/widget-config.enum";
import { LegMarketInfoModel } from "./leg-market-info.model";
import { NoLegSwapDetailsModel } from "./no-leg-swap-details.model";

export class OrderLegModel {
  legOrderId: string;
  action: string;
  actions: string[];
  amount: OrderCurrencyAmountBaseModel | number;
  floatAmount: OrderCurrencyAmountBaseModel | number;
  ccyBuy: string;
  ccySell: string;
  ccyPair: string;
  buyAmount: OrderCurrencyAmountBaseModel;
  sellAmount: OrderCurrencyAmountBaseModel;
  clientReference: string;
  payFrom: PaymentAccountModel[];
  payTo: PaymentToModel[];
  payFromOption: string;
  payToOption: string;
  tenor: string;
  valueDate: DateModel | string;
  forwardPoints?: number;
  exchangeRate?: number;
  commissionAmount?: number;
  allInRate?: number;
  rateAllIn: OrderRateModel;
  rateBooked: OrderRateModel;
  rateFilled: OrderRateModel;
  rateLastFixing: OrderRateModel;
  rateTraded: OrderRateModel;
  state: string;
  marketInfo: LegMarketInfoModel;
  margin: OrderMarginModel;
  fundsTakenOnSubmit: boolean;
  totalSettlement: number;
  totalPayment: number;
  simpleDueDate?: SimpleDueDateEnum;
  orderId?: string;
  orderTradeType?: string;
  orderDateTraded?: DateModel | string;
  swapDetails?: NoLegSwapDetailsModel;
}