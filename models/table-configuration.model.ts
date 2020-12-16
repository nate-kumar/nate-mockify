import { TableSortConfigurationModel } from "./table-sort-configuration.model";
import { FilterModel } from "./filter.model";

export interface TableConfigurationModel {
  column?: any[];
  filters?: FilterModel[];
  sorts?: TableSortConfigurationModel[];
}
