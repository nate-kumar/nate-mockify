import { BalanceChartSeriesModel } from "./balance-chart-series.model";
import { AggregatedBalanceChartItemModel } from "./aggregated-balance-chart-item.model";

export interface AggregatedBalanceChartSeriesModel extends BalanceChartSeriesModel {
  series: AggregatedBalanceChartItemModel[];
}
