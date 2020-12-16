import { DateModel } from "./date.model";

export interface PriceAlertModel  {
  id: string;
  priceAlertId: string;
  ccy1: string;
  ccy2: string;
  side: true;
  hitCount: number;
  rate: number;
  expireDate: Date | string;
  expireTime: string;
  expireTimeSetting: string;
  alias: string;
  comment: string;
  matchedDate: Date;
  isEnabled: boolean;
  actions?: string[];
  dateExpire: DateModel;
  priceAlertExpired?: boolean;
}
