import { ComplianceOnboardingMainContactModel } from "./compliance-onboarding-main-contact.model";
import { ComplianceOnboardingSectionsModel } from "./compliance-onboarding-sections.model";

export class ComplianceOnboardingModel {
  lastInteraction: string;
  id: string;
  accountType: string;
  mainContact: ComplianceOnboardingMainContactModel;
  status: string;
  sections: ComplianceOnboardingSectionsModel;
}
