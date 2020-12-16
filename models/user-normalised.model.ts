import { UserModel } from "./user.model";

export interface UserNormalisedModel { // TODO replace with normalisedObject
  byId: {
    [id: string]: UserModel;
  };
  allIds: string[];
}
