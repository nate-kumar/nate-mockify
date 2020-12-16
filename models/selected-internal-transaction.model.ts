import { InternalTransactionModel } from "./reconciliation.model";

export interface SelectedInternalTransactionModel {
  selectedTotal: number;
  totalValue: number;
  transactions: InternalTransactionModel[];
}
