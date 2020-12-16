import { OptionModel } from "./option.model";

export interface OptionsBatchModel {
  id: string;
  groupReference: string;

  requestDate: string;
  tradeDate: string;
  expiryDate: string;
  expiryTime: string;
  premiumSettlementDate: string;
  bookedDate: string;

  draftedChanges: boolean;
  status: string;
  strike: number;
  buyCurrency: string;
  buyNotional: number;
  sellCurrency: string;
  sellNotional: number;
  direction: string;
  type: string;
  documentUri: string;

  options: OptionModel[];
  actions: string[];

  commissionPct: number;
  commissionAmnt: number;
  commissionCurrency: string;
  optionValue: number;
  totalValue: number;
  valueCurrency: string;
  unrealisedPL: number;
  PnLCurrency: string;
}
