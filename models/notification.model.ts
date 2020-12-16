import { DateModel } from "./date.model";

export interface NeoNotificationModel {
  dateRaised: DateModel;
  id: string;
  message: string;
  priority: string;
  state: string;
  subject: string;
  type: string;
  data?: {};

  fullMessage?: boolean;
}
