import { TableFilterTypesModel } from "./table-filter-types.model";

export interface TableFilterTypesNormalisedModel { // TODO replace with normalisedObject
  byId: TableFilterTypesModel;
  allIds: string[];
}
