import { InternalTransactionModel } from "./Internal-transaction.model";

export interface SelectedInternalTransactionModel {
  selectedTotal: number;
  totalValue: number;
  transactions: InternalTransactionModel[];
}
