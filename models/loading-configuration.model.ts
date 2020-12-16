import { LoadingOrderItem } from "./loading-order-item.model";

export interface LoadingConfigurationModel {
  order: LoadingOrderItem[];
  error: number;
  prefix?: string;
  icon?: string;
}
