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
