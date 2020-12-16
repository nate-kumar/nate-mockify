// -> Base model for a wallet response
import { IbanModel } from "./iban.model";
import { ContextMenuActionListItemModel } from './context-menu-action-list-item.model';
import { TransactionModel } from "./wallet-transaction.model";
import { OrderCurrencyAmountModel } from "./order-currency-amount.model";

export class WalletModel {
  name?: string;
  description?: string;
  accountNumber?: string;
  availableBalance?: number;
  balance?: number;
  balanceDate?: string;
  baseCurrencyBalance?: number;
  baseCurrencyCode?: string;
  currencyCode?: string;
  default?: boolean;
  hasOperations?: boolean;
  ibans?: IbanModel[];
  id?: string;
  type?: string;
  active?: boolean;
  transactions?: TransactionModel[];
  actions?: string[];
  state?: string;
  value?: string;
  label?: string;
  alias?: string;
  disabled?: boolean;
  hidden?: boolean;
  isCurrencyActive?: boolean;
  isCurrencyAndWalletActive?: boolean;
  isOutOfDate?: boolean;
  creationDate?: Date;
  updateState?: string;
  corpId?: string;
  balanceAmount?: OrderCurrencyAmountModel;
  availableBalanceAmount?: OrderCurrencyAmountModel;
  baseCurrencyBalanceAmount?: OrderCurrencyAmountModel;
  buttons?: ContextMenuActionListItemModel[];
}