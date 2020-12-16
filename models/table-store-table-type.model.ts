import { TableKeysModel } from "./table-keys.model";

export interface TableStoreTableTypeInterface {
  id: string;
  layouts: string[];
  filters: string[];
  presetKeys: TableKeysModel;
  selected: TableKeysModel;
}
