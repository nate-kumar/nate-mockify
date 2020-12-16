export interface MtfApprovalDetailsRequestModel {
  id: string;
  corpId: string;
  clientOrderId?: string;
  swapCategory?: string;
  commissionPercent?: number;
  commissionCurrency?: string;
  marginPercent?: number;
  allowNegativeMargin?: boolean;
  isPostTradeMtf?: boolean;
}
