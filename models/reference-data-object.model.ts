import { StringSelectItemModel } from "./string-select-item.model";

export interface ReferenceDataObjectModel {
  values?: string[];
  items: StringSelectItemModel[];
  translationPrefix: string;
  translationSuffix?: string;
}
