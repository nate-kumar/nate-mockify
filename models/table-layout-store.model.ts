import { ColumnState } from "ag-grid-community/dist/lib/columnController/columnController";
import { TableSortConfigurationModel } from "./table-sort-configuration.model";

export interface TableLayoutStore {
  [layoutId: string]: {
    columns: ColumnState[],
    sorts: TableSortConfigurationModel[]
    tableLayoutName: string;
    layoutLabel: string;
  };
}
