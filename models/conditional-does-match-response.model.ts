import { ConditionModel } from "./conditional.model";

export interface ConditionalDoesMatchResponseModel {
  matchSuccess: boolean;
  failedConditions?: ConditionModel[];
}
