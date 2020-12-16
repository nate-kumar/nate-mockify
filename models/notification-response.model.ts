import { NeoNotificationModel} from "./notification.model";
import { NotificationTotalsModel } from "./notification-totals.model";

export interface NotificationsResponseModel {
  notifications: NeoNotificationModel[];
  totals?: NotificationTotalsModel;
}
