import { PaymentTableInterface } from "./payment-table.model";

export interface PaymentRowModel extends PaymentTableInterface {
  isCheckboxHidden?: boolean;
  checked?: boolean;
}
