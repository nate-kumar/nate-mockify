import { BalanceChartItemModel } from "./balance-over-time.model";

export interface AggregatedBalanceChartItemModel extends BalanceChartItemModel {
  // chart
  min?: number;
  max?: number;

  // tooltip
  intervalStart: Date;
  intervalEnd: Date;
  numOperations: number;
  totalCredit: number;
  totalDebit: number;
  totalNet: number;
  endOfPeriodBalance: number;
}
