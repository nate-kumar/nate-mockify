import { ComplianceTradeModel } from "./compliance-trade.model";

export interface ComplianceTradesModel {
  section: string;
  trades: ComplianceTradeModel[];
}
