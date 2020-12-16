import { ChartPointModel } from "./chart-point.model";

export interface ChartDataModel {
  name: string; // 'leg1/ask'
  series: ChartPointModel[];
}

