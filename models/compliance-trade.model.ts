import { ComplianceTradeClientModel } from "./compliance-trade-client.model";
import { ComplianceTradeDetailsModel } from "./compliance-trade-details.model";

export class ComplianceTradeModel {
  id: string;
  tradeRef: string;
  tradeType: string;
  client: ComplianceTradeClientModel;
  trade: ComplianceTradeDetailsModel;
  valueDate: string;
  tradeDate: string;
  currencyBought: string;
  currencySold: string;
}
