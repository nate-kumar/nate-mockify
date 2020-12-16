export interface MtfApprovalFormControlValues {
  corpId: string;
  clientOrderId?: string;
  swapCategory?: string;
  commissionPercent?: number;
  commissionAmount?: number;
  commissionCurrency?: string;
  marginPercent?: number;
  marginAmount?: number;
  marginCurrency?: string;
  allowNegativeMargin?: boolean;
}
