import { OrderRateModel } from "./order-rate.model";

export interface LegMarketInfoModel {
  lpName: string;
  lpTradeRef: string;
  venueName: string;
  venueTradeId: string;
  rateLP: OrderRateModel;
  amountBoughtLP: any;
  amountSoldLP: any;
}
