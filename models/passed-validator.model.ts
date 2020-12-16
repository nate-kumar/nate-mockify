import { ValidatorFn } from "@angular/forms";

export interface PassedValidatorModel {
  validators: ValidatorFn[];
  additionalData?: {
    maxLength?: number;
  };
}
