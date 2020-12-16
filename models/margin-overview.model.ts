import { MarginPercentTriggeredModel } from "./margin-percent-triggered.model";
import { OrderCurrencyAmountModel } from "./order-currency-amount.model";

export interface MarginOverviewModel {
  deposited: OrderCurrencyAmountModel;
  depositedNeoBase?: OrderCurrencyAmountModel;
  blocked: OrderCurrencyAmountModel;
  blockedNeoBase?: OrderCurrencyAmountModel;
  tradeable: OrderCurrencyAmountModel;
  tradeableNeoBase?: OrderCurrencyAmountModel;
  unrealisedPNL: OrderCurrencyAmountModel;
  unrealisedPNLNeoBase?: OrderCurrencyAmountModel;
  withdrawable: OrderCurrencyAmountModel;
  withdrawableNeoBase?: OrderCurrencyAmountModel;
  warningLine: MarginPercentTriggeredModel;
  callLine: MarginPercentTriggeredModel;
  cutLine: MarginPercentTriggeredModel;
}
