import { TextFormattersModel } from './text-formatters.model';
import { TemplateVariablesModel } from './template-variables.model';

export interface AddCodeFromTemplateModel {
  variables: TemplateVariablesModel,
  templatePathSegment: string,
  fileToUpdatePathSegment: string,
  formatting?: TextFormattersModel
}
