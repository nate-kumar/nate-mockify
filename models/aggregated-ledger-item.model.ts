import { LedgerModel } from "./ledger.model";

export interface AggregatedLedgerItemModel {
  groupName: string;
  transactions: LedgerModel[];
}
