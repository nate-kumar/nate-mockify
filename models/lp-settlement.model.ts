import { LpCurrenciesModel } from "./lp-currencies.model";
import { LpStateEnum } from "../_enums/lp-state.enum";
import { OrderTableModel } from "./order-table.model";

export interface LpSettlementModel {
  id: string;
  reference: string;
  requestDateTime: string;
  orders: OrderTableModel[];
  currencies: LpCurrenciesModel[];
  state: LpStateEnum;
  paymentFileUrl: string;
  actions?: string[];
}
