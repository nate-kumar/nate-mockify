import { WalletModel } from "./wallet.model";

export interface IbanModel {
  id: string;
  country: string;
  alias: string;
  iban: string;
  allowedCurrencies: string[];
  ibanType: string;
  wallets: WalletModel[];
  accounts: WalletModel[];
  bankName: string;
  bic: string;
  countryCode: string;
  accountExtension: string;
  accountNumber: string;
  currencies: string[];
  corpName: string;
}
