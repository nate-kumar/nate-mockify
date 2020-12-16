import { WalletModel } from "./wallet.model";

export class GroupedCurrencyModel {
  currencyCode: string;
  totalBalance: number;
  wallets?: WalletModel[];
  selectedAccounts?: WalletModel[];
  isSuspendedCurrency: boolean;
  flagClass: string;
  favourite?: boolean;
}
