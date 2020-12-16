import { FormattedTickSideModel } from "./formatted-tick-side.model";

export interface ChartPointModel {
  name: Date;
  value: number;
  data?: FormattedTickSideModel;
}
