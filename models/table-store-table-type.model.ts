import { TableKeysInterface } from "./table-keys.model";

export interface TableStoreTableTypeInterface {
  id: string;
  layouts: string[];
  filters: string[];
  presetKeys: TableKeysInterface;
  selected: TableKeysInterface;
}
