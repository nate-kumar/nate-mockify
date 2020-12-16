import { OrderLegModel } from "./order-leg.model";

export interface OrderQuoteModel {
  forwardPoints: number;
  legs: OrderLegModel[];
}
