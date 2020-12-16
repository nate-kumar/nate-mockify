import { NeoNotificationModel} from "./notification.model";
import { NeoTotalsModel } from "./notification-totals.model";

export interface NeoNotificationsResponse {
  notifications: NeoNotificationModel[];
  totals?: NeoTotalsModel;
}
