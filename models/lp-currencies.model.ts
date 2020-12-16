import { OrderTableModel } from "./order-table.model";

export interface LpCurrenciesModel {
  currency: string;
  debit: number;
  credit: number;
  net: number;
  orders?: OrderTableModel[];
}
