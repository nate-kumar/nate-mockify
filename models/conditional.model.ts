import { LogicOperatorEnum } from "../_enums/conditional-helper.enum";

export interface ConditionModel {
  property: string;
  terms?: ( string | number )[];
  operator: LogicOperatorEnum;
}
