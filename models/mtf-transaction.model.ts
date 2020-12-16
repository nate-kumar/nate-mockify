import { DateModel } from "./date.model";
import { OrderModel } from "./order.model";
import { MtfTransactionCommissionModel } from "./mtf-transaction-commission.model";
import { MtfApprovalInformation } from "./mtf-approval-information.model";
import { MtfClientModel } from "./mtf-client.model";
import { MtfTransactionRegReportsModel } from "./mtf-transaction-reg-reports.model";

export class MtfTransactionModel {
  id: string;
  state: string;
  client: MtfClientModel;
  type: string;
  product: string;
  referenceNumber: string;
  requesterCompany: string;
  providerCompany: string;
  requesterAction: string;
  notionalAmount: string;
  quote: string;
  baseCurrency: string;
  quoteCurrency: string;
  effectiveDate: string;
  tradingVenue: string;
  venueMicCode: string;
  effectivePeriod: string;
  maturityDate: string;
  maturityPeriod: string;
  farLegRequesterAction: string;
  nearLegRequesterAction: string;
  providerAction: string;
  orderStatus: string;
  tradeDate: string;
  nearLegIsin: boolean;
  farLegIsin: boolean;
  isin: string;
  executionWithinFirm: string;
  investmentDecision: string;
  deliveryDate: string;
  executionRate: string;
  expiryDate: string;
  farAmount: string;
  farPoints: number;
  forwardPoints: string;
  forwardRate: string;
  notionalCurrency: string;
  oppositeAmount: string;
  oppositeCurrency: string;
  price: string;
  rate: string;
  spotRate: string;
  status: string;
  tradeId: string;
  tradingCapacity: string;
  usI_UTI: string;
  complexTradeComponentId: string;
  negotiationStatusComment: string;
  matchedClientOrderId: string;
  linkedClientOrderId: string;
  requesterComment: string;
  farOppositeAmount: string;
  uploadDate: DateModel;
  regReports: MtfTransactionRegReportsModel;
  actions: string[];
  approvalInformation?: MtfApprovalInformation;
  commission: MtfTransactionCommissionModel;
  lpTradeRef?: string;
  swapCategory: string;
  marginPercent: number;
  approvalChannel: string;
  source: string;
  clientOrder: OrderModel;
}