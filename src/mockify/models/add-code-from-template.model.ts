import { TextFormattersModel } from './text-formatters.model';
import { TemplateVariablesModel } from './template-variables.model';

export interface AddCodeFromTemplateModel {
  templatePathSegment: string,
  fileToUpdatePathSegment: string,
  variables?: TemplateVariablesModel,
  formatting?: TextFormattersModel
}
