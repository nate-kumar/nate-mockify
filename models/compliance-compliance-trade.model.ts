import { TradesModel } from "./compliance-trade.model";

export interface ComplianceTradeModel {
  section: string;
  trades: TradesModel[];
}
