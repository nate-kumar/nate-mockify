export interface OptionModel {
  clientOrderId: string;
  groupReference: string;
  uniqueReference: string;

  requestDate: string;
  tradeDate: string;
  expiryDate: string;
  expiryTime: string;
  valueDate: string;
  premiumSettlementDate: string;

  status: string;
  strike: number;
  buyCurrency: string;
  buyNotional: number;
  sellCurrency: string;
  sellNotional: number;
  direction: string;
  type: string;

  commissionPct: number;
  commissionAmnt: number;
  commissionCurrency: string;
  optionValue: number;
  totalValue: number;
  valueCurrency: string;
  unrealisedPL: number;
  PnLCurrency: string;

  actions: string[];
}
