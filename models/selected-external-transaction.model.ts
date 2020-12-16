import { ExternalTransactionModel } from "./external-transaction.model";

export interface SelectedExternalTransactionModel {
  selectedTotal: number;
  totalValue: number;
  transactions: ExternalTransactionModel[];
}
