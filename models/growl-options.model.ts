import { SnotifyToastConfig } from "ng-snotify";
import { Observable } from "rxjs";

export interface GrowlOptionsModel {
  title: string;
  // For some reason, initiation requires 'message' but update requires 'body' so we need both.
  message: string;
  body?: string;
  config: SnotifyToastConfig;
  async?: Observable<SnotifyToastConfig>;
}
