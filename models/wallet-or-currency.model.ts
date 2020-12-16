import { GroupedCurrencyModel } from "./grouped-currency.model";
import { WalletOrCurrency } from "../_enums/wallet-or-currency.enum";
import { WalletModel } from "./wallet.model";

export class WalletOrCurrencyModel { // TODO rework typescript way
  constructor (object: WalletModel | GroupedCurrencyModel, walletOrCurrency: WalletOrCurrency) {

    if ( walletOrCurrency === WalletOrCurrency.wallet ) {

      let wallet = object as WalletModel;
      this.id = wallet.id;
      this.type = walletOrCurrency;
      this.currencyCode = wallet.currencyCode;
      this.object = wallet;

    } else if ( walletOrCurrency === WalletOrCurrency.currency ) {

      this.id = object.currencyCode;
      this.type = walletOrCurrency;
      this.currencyCode = object.currencyCode;
      this.object = object;
    }
  }

  id: string;
  type: WalletOrCurrency;
  currencyCode: string;
  object: WalletModel | GroupedCurrencyModel;
  expandable?: boolean;
  favourite?: boolean;
}
