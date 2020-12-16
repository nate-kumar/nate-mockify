import { DateModel } from "./date.model";
import { Moment } from 'moment';
import { ContextMenuActionListItemModel } from './context-menu-action-list-item.model';
import { OrderCommissionModel } from "./order-commission.model";
import { OrderM2MModel } from "./order-m2m.model";
import { OrderCorpModel } from "./order-corp.model";
import { OrderMarginModel } from "./order-margin.model";
import { OrderLegModel } from "./order-leg.model";
import { OrderPersonModel } from "./order-person.model";
import { OrderAmountModel } from "./order-amount.model";
import { OrderConfirmationDocumentModel } from "./order-confirmation-document.model";
import { OrderQuoteModel } from "./order-quote.model";

export class OrderModel {
  loadingState?: number;
  orderId?: string;
  orderState?: string;
  actions: string[];
  buttons: ContextMenuActionListItemModel[];
  approvedBy: string;
  lastUpdated: Moment;
  margin?: OrderMarginModel;
  clientOrderId: string;
  commission: OrderCommissionModel;
  buyAmount: OrderAmountModel;
  sellAmount: OrderAmountModel;
  confirmationDocument?: OrderConfirmationDocumentModel;
  m2m: OrderM2MModel;
  corp: OrderCorpModel;
  dateBooked: DateModel | string;
  dateTraded: DateModel | string;
  id: string;
  legs: OrderLegModel[];
  maxValueDate: DateModel | string;
  minValueDate: DateModel | string;
  operator: OrderPersonModel;
  owner: OrderPersonModel;
  parentOrderId: string;
  paymentCount: number;
  quote: OrderQuoteModel;
  receivedAdvisory: boolean;
  reference: string;
  skipPhoneConfirmation: boolean;
  source: string;
  spot: number;
  state: string;
  tradeType: string;
  transactionType: string;
  useAllInPrice: boolean;
  vanityId: string;
  reverseRate: boolean;
  triggerPrice?: number;
  useTriggerPrice?: boolean;
  stopPrice?: number;
  useStopPrice?: boolean;
  commissionCurrency?: string;
  ccyPair?: string;
  isRFQ?: boolean;
  rfqId?: string;
  quoteId?: string;
}
