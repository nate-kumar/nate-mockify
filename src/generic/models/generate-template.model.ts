export default interface GenerateTemplateModel {
  templateUrl: string;
  targetUrl?: string;
  variables?: Record<string, any>;
}