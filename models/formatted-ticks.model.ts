import { FormattedTickRatesModel } from "./formatted-tick-rates.model";
import { FormattedTickSeriesModel } from "./formatted-tick-series.model";

export class FormattedTicksModel {
  currencyPair: string;
  tenors: string[];
  tenorString: string;
  rates: FormattedTickRatesModel; // Complete rate ticks from the server
  series: FormattedTickSeriesModel; // Series of data points for lines on a chart
}
