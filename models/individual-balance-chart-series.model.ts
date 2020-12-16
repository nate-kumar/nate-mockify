import { BalanceChartSeriesModel } from "./balance-chart-series.model";
import { IndividualBalanceChartItemModel } from "./individual-balance-chart-item.model";

export interface IndividualBalanceChartSeriesModel extends BalanceChartSeriesModel {
  series: IndividualBalanceChartItemModel[];
}
