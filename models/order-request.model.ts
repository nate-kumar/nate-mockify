import { OrderLegModel } from "./order-leg.model";

export interface OrderRequestModel {
  clientOrderId: string;
  isRFQ?: boolean;
  rfqId?: string;
  quoteId?: string;
  quote?: number;
  useAllInPrice?: boolean;
  receivedAdvisory?: boolean;
  commissionCurrency?: string;
  transactionType: string;
  legs: OrderLegModel[];
}
