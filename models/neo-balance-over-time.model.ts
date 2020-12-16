import { LedgerModel } from './ledger.model';

export interface DateRangeModel {
  startDate: Date;
  endDate: Date;
}

export interface SelectOptionsModel {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SplitLedgerItemsModel {
  completeTransactions: LedgerModel[];
  pendingTransactions: LedgerModel[];
}

export interface AggregatedLedgerItemsModel {
  groupName: string;
  transactions: LedgerModel[];
}

// Chart series models
export interface BalanceChartSeriesModel {
  name: string;
  isAggregated: boolean;
}

export interface IndividualBalanceChartSeriesModel extends BalanceChartSeriesModel {
  series: IndividualBalanceChartItemModel[];
}

export interface AggregatedBalanceChartSeriesModel extends BalanceChartSeriesModel {
  series: AggregatedBalanceChartItemModel[];
}


// Chart item models
export interface BalanceChartItemModel {
  // chart
  name: Date;     // x-value
  value: number;  // y-value

  // tooltip
  currencyCode: string;
  baseCurrencyCode: string;
  walletAlias?: string;
  countryFlag?: string;
}

export interface IndividualBalanceChartItemModel extends BalanceChartItemModel {
  // tooltip
  transactionAmount: number;
  transactionBalance: number;
  valueDate: Date;
}

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
0