import { ComparisonOperatorEnum } from "../_enums/conditional-helper.enum";
import { ConditionModel } from "./conditional.model";

export interface ConditionalLogicModel {
  relation: ComparisonOperatorEnum;
  conditions: (ConditionModel | ConditionalLogicModel)[];
}
