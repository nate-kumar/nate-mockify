import { OrderModel } from "./order.model";

export interface OrderBlotterWidgetModel extends OrderModel {
  isExecutedSorting: boolean;
  dateTradedSorting: Date;
  dateBookedSorting: Date;
}
