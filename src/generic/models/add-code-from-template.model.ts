export default interface AddCodeFromTemplateModel {
  variables?: Record<string, any>;
  templatePathSegment: string;
  fileToUpdatePathSegment: string;
  formatting?: {
    numLineBreaksBefore?: number;
    numLineBreaksAfter?: number;
  };
}