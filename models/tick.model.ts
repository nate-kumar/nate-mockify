import { TickSideModel } from "./tick-side.model";

export interface TickModel {
  ask?: TickSideModel;
  bid?: TickSideModel;
  price?: TickSideModel;
  symbol: string;
  pipSize: number;
  timestamp: string | Date;
  quoteId?: string;
  expireTime?: string;
  rfqExpireTime?: string;
  rfqId?: string;
}
