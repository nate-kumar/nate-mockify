import { SelectedTableConfigurationModel } from "./selected-table-configuraton.model";

export interface SelectedTableConfigurationNormalisedModel { // TODO
  byId: {
    [id: string]: SelectedTableConfigurationModel;
  };
  allIds: string[];
}
