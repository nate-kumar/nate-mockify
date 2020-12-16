import { LedgerModel } from "./ledger.model";

export interface BalanceOverTimeSplitLedgerItemModel {
  completeTransactions: LedgerModel[];
  pendingTransactions: LedgerModel[];
}
