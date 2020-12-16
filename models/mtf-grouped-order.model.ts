import { OrderModel } from "./order.model";

export interface MtfGroupedOrderModel { // TODO use Record
  [key: string]: OrderModel[];
}
