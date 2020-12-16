import { NeoNotificationModel } from "./notification.model";

export interface NotificationNormalisedModel { // TODO replace with normalisedObject
  byId: {
    [id: string]: NeoNotificationModel;
  };
  allIds: string[];
}
