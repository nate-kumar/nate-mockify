import { DateModel } from "./date.model";
import { SimpleStatusEnum } from "../_enums/widget-config.enum";
import { OrderCurrencyAmountModel } from "./order-currency-amount.model";

export interface LedgerModel {
  id: string;
  uuid: string;
  client: {
    name: string;
    id: string;
  };
  orderId: string;
  reference: string;
  status: string;
  creationDate: DateModel;
  valueDate: DateModel;
  debitCredit: string;
  amount: OrderCurrencyAmountModel;
  impactedWallet: {
    id: string,
    currency: string,
    accountNumber: string,
    walletName: string,
    walletType: string;
  };
  transferType: string;
  operationType: string;
  walletBalance: {
    amountActual: OrderCurrencyAmountModel;
    amountBase: OrderCurrencyAmountModel;
  };
  sender: {
    accountType: 'internal' | 'external',
    counterPartyName: string;
    bankName: string;
    alias: string;
    account: string;
  };
  beneficiary: {
    accountType: 'internal' | 'external',
    counterPartyName: string;
    bankName: string;
    alias: string;
    account: string;
  };
  runningClientTotalBase: OrderCurrencyAmountModel;
  visibility: string;
  simpleState: SimpleStatusEnum;
  orderType: string;
}
