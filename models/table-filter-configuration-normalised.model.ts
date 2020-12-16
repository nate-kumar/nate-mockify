import { TableFilterConfigurationModel } from "./table-filter-configuration.model";

export interface TableFilterConfigurationNormalisedModel { // TODO replace with normalisedObject
  byId: {
    [id: string]: TableFilterConfigurationModel;
  };
  allIds: string[];
}
