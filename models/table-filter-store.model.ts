import { KeyValueModel } from "../shared/utility-functions";

export interface FilterStore {
  [filterId: string]: KeyValueModel<any>;
}
