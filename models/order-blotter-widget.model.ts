import { OrderModel } from "./order.model";

export interface NeoOrderBlotterWidgetModel extends OrderModel {
  isExecutedSorting: boolean;
  dateTradedSorting: Date;
  dateBookedSorting: Date;
}
