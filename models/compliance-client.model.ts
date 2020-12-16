import { ComplianceOnboardingModel } from "./compliance-onboarding.model";

export interface ComplianceClientModel {
  section: string;
  clients: ComplianceOnboardingModel[];
}
