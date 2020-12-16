import { OrderTableModel } from "./order-table.model";

export interface CurrencyBreakdownModel {
  [ key: string ]: OrderTableModel[];
}
