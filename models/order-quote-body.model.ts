import { OrderMarginModel } from "./order-margin.model";
import { DateModel } from "./date.model";
import { OrderLegModel } from "./order-leg.model";
import { FormError } from "../shared/form-validation";
import { OrderModel} from "./order.model";
import { OrderTradeLimitModel } from "./order-trade-limit.model";

export interface OrderQuoteBodyModel extends OrderModel {
  quoteId?: string;
  quotedRate?: number;
  margin?: OrderMarginModel;
  spotDate?: DateModel | string;
  legs: OrderLegModel[];
  warnings: FormError[];
  approvalRequired?: boolean;
  tradeLimits: OrderTradeLimitModel;
}
