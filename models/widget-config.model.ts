import { DirectionEnum, SimpleStatusEnum } from "../_enums/widget-config.enum";

export interface WidgetConfigModel {
  currencies?: string | string[];
  tenors?: string[];
  id?: number;
  depositedMargin?: number;
  exposure?: number;
  unresolvedProfitLoss?: number;
  rateDisplay?: string;
  wallets?: string[] | string;
  direction?: string;
  hidePending?: boolean;
  timeInterval?: string;
  startDateString?: string;
  endDateString?: string;
  granularity?: string;
  tradeFilter?: string;
  getIdContextFromRoute?: boolean;
  status?: SimpleStatusEnum[];
  directions?: DirectionEnum[];
}
