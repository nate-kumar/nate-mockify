import { ReconciliationAccountModel } from "./reconciliation-account.model";
import { OrderCurrencyAmountModel } from "./order-currency-amount.model";
import { OrderCorpModel } from "./order-corp.model";

export interface InternalTransactionModel {
  actions?: string[];
  id: string;
  state: string;
  sourceAccount: ReconciliationAccountModel;
  targetAccount: ReconciliationAccountModel;
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
