import { FormattedTickSideModel } from "./formatted-tick-side.model";

export interface TickHistoryItemModel {
  name: string; // 'leg1/ask'
  series: FormattedTickSideModel[];
}
