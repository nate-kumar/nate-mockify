import { OrderCurrencyAmountModel } from "./order-currency-amount.model";

export interface ExternalTransactionModel {
  actions?: string[];
  amount: OrderCurrencyAmountModel;
  beneficiaryId: string;
  beneficiaryName:  string;
  beneficiaryType:  string;
  clientOrderId:  string;
  clientOrderReference:  string;
  comments:  string;
  corpId:  string;
  corpName:  string;
  currency:  string;
  date: Date;
  destinationAccount:  string;
  direction:  string;
  id:  string;
  operationId:  string;
  operationState:  string;
  operationType:  string;
  payerId:  string;
  payerName:  string;
  payerType:  string;
  rag:  string;
  reference:  string;
  sourceAccount:  string;
  sourceSystem:  string;
  state:  string;
  uid:  string;
  uploadDate: Date;
  remittanceInfo?: string;
  matchedOperation: string;
  senderName?: string;
  checked?: boolean;
  isCheckboxHidden?: boolean;
}
