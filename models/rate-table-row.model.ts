import { RateTableTenorMapModel } from "./rate-table-tenor-map.model";

export interface RateTableRowModel {
  ccy1: string;
  ccy2: string;
  symbol: string;
  tenors?: RateTableTenorMapModel;
}
