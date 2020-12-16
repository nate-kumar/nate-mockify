export interface PasswordRulesModel {
  positive: {
    text: string;
    regexPattern: string;
    args?: string;
  }[];
  negative: {
    text: string;
    regexPattern: string;
    args?: string;
  }[];
}
