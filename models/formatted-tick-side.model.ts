export interface FormattedTickSideModel {
  name: string;
  side: string;
  leg: number;
  points: number;
  price: number;
  spotPrice: number;
  yieldPercentage: number;
  movement: number;
  time: Date;
}
