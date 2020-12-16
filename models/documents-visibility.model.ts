import { DocumentsVisibilityEditableModel } from "./documents-visibility-editable.model";
import { DocumentsVisibilityValueModel } from "./documents-visibility-value.model";

export interface DocumentVisibilityModel {
  editable: DocumentsVisibilityEditableModel;
  values: DocumentsVisibilityValueModel;
}
