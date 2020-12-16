import { NeoFXRateTick } from "./fx-rate-tick.model";

export interface FormattedTickRatesModel {
  active?: boolean;
  latest: NeoFXRateTick; // Latest Ask & Bid
  history: NeoFXRateTick[]; // Each array item is a complete price tick
}
