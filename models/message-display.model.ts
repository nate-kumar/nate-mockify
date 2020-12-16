import { AlertButton, AlertInput } from "@ionic/core";
import { Observable } from "rxjs";
import { Snotify } from "ng-snotify";

export interface MessageDisplayModel {
  subject: string;
  message: string;
  duration?: number;
  actionType: number;
  shouldStack?: boolean;
  displayType: number;
  buttons?: AlertButton[];
  inputs?: AlertInput[];
  translationVariables?: {};
  closed?: () => void;
  async?: Observable<Snotify>;
  tag?: string;
}
