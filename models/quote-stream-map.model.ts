import { QuoteStreamModel } from "./quote-stream.model";

export class QuoteStreamMapModel { // TODO use record
  [rfqId: string]: QuoteStreamMapModel;
}
