import { TableStoreTableTypeInterface } from "./table-store-table-type.model";

export interface TableStore {
  [ tableType: string ]: TableStoreTableTypeInterface;
}
