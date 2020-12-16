import { OnboardingModel } from "./compliance-onboarding.model";

export interface ComplianceClientModel {
  section: string;
  clients: OnboardingModel[];
}
