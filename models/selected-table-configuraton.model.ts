export interface SelectedTableConfigurationModel {
  layout: string;
  filters: string;
}

export interface SelectedTableConfigurationNormalisedModel { // TODO
  byId: {
    [ id: string ]: SelectedTableConfigurationModel;
  };
  allIds: string[];
}

export interface UpdatedSelectedLayoutModel {
  selectedConfigurationId: string;
  layoutName: string;
}
