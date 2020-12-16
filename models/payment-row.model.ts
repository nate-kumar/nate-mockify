import { PaymentTableModel } from "./payment-table.model";

export interface PaymentRowModel extends PaymentTableModel {
  isCheckboxHidden?: boolean;
  checked?: boolean;
}
