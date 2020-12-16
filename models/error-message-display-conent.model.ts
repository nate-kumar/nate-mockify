import { KeyValueModel } from "app/shared/utility-functions";

export interface ErrorMessageDisplayContentModel {
  subject: string;
  message: string;
  translationVariables: KeyValueModel<string>;
}
