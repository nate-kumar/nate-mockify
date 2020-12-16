import { BalanceChartItemModel } from "./balance-over-time.model";

export interface IndividualBalanceChartItemModel extends BalanceChartItemModel {
  transactionAmount: number;
  transactionBalance: number;
  valueDate: Date;
}
