import { ColumnState } from "ag-grid-community/dist/lib/columnController/columnController";
import { TableSortConfigurationModel } from "./table-sort-configuration.model";


export interface TableLayoutConfigurationModel {
  sorts: TableSortConfigurationModel[];
  columns: ColumnState[];
}

