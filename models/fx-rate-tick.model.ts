import { TickModel } from "./tick.model";
import { NeoFXRateTickSideModel } from "./fx-tick-side.model";

export class NeoFXRateTick { // TODO move out of models file
  symbol: string;
  ccy1: string;
  ccy2: string;
  time: Date;
  ask: NeoFXRateTickSideModel;
  bid: NeoFXRateTickSideModel;
  price: NeoFXRateTickSideModel;
  quoteId?: string; // Only applicable if the tick is a quote
  expireTime?: string | Date; // Only applicable if the tick is a quote
  rfqExpireTime?: string | Date; // Only applicable if the tick is a quote
  rfqId?: string; // Only applicable if the tick is a quote

  constructor (serverTick: TickModel) {
    this.price = serverTick.price || serverTick.ask;
    this.ask = serverTick.ask;
    this.bid = serverTick.bid;
    this.time = new Date(serverTick.timestamp);
    this.quoteId = serverTick.quoteId;
    this.expireTime = serverTick.expireTime;
    this.rfqExpireTime = serverTick.rfqExpireTime;
    this.rfqId = serverTick.rfqId;
    this.symbol = serverTick.symbol;
    if ( serverTick.symbol ) {
      this.ccy1 = serverTick.symbol.split('/')[0];
      this.ccy2 = serverTick.symbol.split('/')[1];
    }
  }
}
