import { ComplianceOnboardingSectionsAnswerModel } from "./compliance-onboarding-sections-answer.model";

export interface ComplianceOnboardingSectionsModel {
  name: string;
  status: string;
  answers: ComplianceOnboardingSectionsAnswerModel[];
  percent: number;
  isClient: boolean;
  companyName: string;
  compnayCountry: string;
}
