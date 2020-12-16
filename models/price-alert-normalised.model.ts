import { PriceAlertModel } from "./price-alert.model";

export interface PriceAlertNormalisedModel { // TODO replace with normalisedObject
  byId: {
    [id: string]: PriceAlertModel;
  };
  allIds: string[];
}
