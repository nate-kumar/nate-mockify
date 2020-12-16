import { OrderTableModel } from "./order-table.model";

export interface OrderRowModel extends OrderTableModel {
  isCheckboxHidden?: boolean;
  checked?: boolean;
}
