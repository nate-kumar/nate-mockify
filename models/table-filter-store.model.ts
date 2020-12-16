import { KeyValueModel } from "../shared/utility-functions";

export interface TableFilterStoreModel {
  [filterId: string]: KeyValueModel<any>;
}
