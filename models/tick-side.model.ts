import { TickLegModel } from "./tick-leg.model";

export interface TickSideModel {
  legs: TickLegModel[];
  spot: number;
  totalPoints: number;
}
