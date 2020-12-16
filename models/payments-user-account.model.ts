import { OrderPersonModel } from "./order-person.model";
import { CounterpartyAccountModel } from "./counterparty-account.model";
import { PaymentsOwnerModel } from "./payments-owner.model";

export interface PaymentsUserAccountModel {
  corp: OrderPersonModel;
  owner: PaymentsOwnerModel;
  account: CounterpartyAccountModel;
}
