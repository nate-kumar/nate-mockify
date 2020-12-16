import { FormattedTickModel } from "./formatted-tick.model";
import { TickHistoryItemModel } from "./tick-history-item.model";

// This will all be processed to ensure that the ticks are ordered correctly etc.
export interface FormattedTickSeriesModel {
  latest: FormattedTickModel; // Latest Ask & Bid
  history: TickHistoryItemModel[]; // Each array item is a line on the graph
}
