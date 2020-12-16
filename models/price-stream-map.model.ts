import { PriceStreamModel } from "./price-stream.model";

export class PriceStreamMapModel { // use Record
  [ currencyPairString: string ]: Record<string, PriceStreamModel>;
}


