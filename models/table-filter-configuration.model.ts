import { CustomFilterModel } from "./custom-filter.model";

export interface TableFilterConfigurationModel {
  [id: string]: CustomFilterModel;
}
