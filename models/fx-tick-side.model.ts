import { FxRateTickSideLegModel } from "./fx-rate-tick-side-leg.model";

export interface NeoFXRateTickSideModel {
  spot: number;
  totalPoints: number;
  legs: FxRateTickSideLegModel[];
}
