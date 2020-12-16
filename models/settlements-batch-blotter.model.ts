import { OrderModel} from "./order.model";
import { PaymentTableModel } from "./payment-table.model";
import { OrderPersonModel } from "./order-person.model";

export class SettlementsBatchBlotterModel {
  id: string;
  reference: string;
  requestDateTime: string;
  purpose: string;
  orders?: OrderModel[];
  payments?: PaymentTableModel[];
  currencies: SettlementsBatchBlotterModel[]; // Yet to be added
  state: string;
  sentState: string;
  receivedState: string;
  paymentFileUrl: string;
  actions?: string[];
  operator: OrderPersonModel;
}
