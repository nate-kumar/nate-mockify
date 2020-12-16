import { AccountModel } from "./reconciliation-account.model";
import { OrderCurrencyAmountModel } from "./order-currency-amount.model";
import { OrderCorpModel } from "./order-corp.model";

export interface InternalTransactionModel {
  actions?: string[];
  id: string;
  state: string;
  sourceAccount: AccountModel;
  targetAccount: AccountModel;
  clientOrderId: string;
  amount: OrderCurrencyAmountModel;
  reference: string;
  dateCreated: string;
  matchedTransactionId: object;
  dueDate: string;
  schemeId: number;
  schemeCollectionId: number;
  corp: OrderCorpModel;
  type: string;
  direction: string;
  checked?: boolean;
  isCheckboxHidden?: boolean;
}
