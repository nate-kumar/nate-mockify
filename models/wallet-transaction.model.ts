export interface TransactionModel {
  ledgerOperationKey: string;
  groupLedgerOperationKey: string;
  parentLedgerOperationKey: string;
  effectiveDate: string;
  effectiveTime: string;
  currencyCode: string;
  amount: number;
  baseAmount: number;
  reference: string;
  state: string;
  ledgerOperationType: string;
  accountKey: string;
  accountName: string;
  accountType: string;
  schemeKey: string;
  iban: string;
  relatedOrderKey: string;
  relatedOrderReference: string;
  runningAccountTotal: number;
  runningAccountTotalBase: number;
  runningCurrencyTotalBase: number;
  runningTotalBase: number;
  baseCurrencyCode: string;
}
