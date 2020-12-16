import { StringSelectItem2Model } from "./string-select-item2.model";

export class CurrencyPairSelectMapModel { // TODO
  [fromCurrency: string]: {
    fromCurrency: string;
    toCurrencies: StringSelectItem2Model[];
  }
}
