import { TableLayoutConfigurationModel } from "./table-layout-configuration.model";

export interface TableLayoutConfigurationNormalisedModel { // TODO replace with normalisedObject
  byId: {
    [id: string]: TableLayoutConfigurationModel;
  };
  allIds: string[];
}
