import { StringSelectItemModel } from "./string-select-item.model";

export interface StringSelectPresetItemModel extends StringSelectItemModel {
  isPresetValue: boolean;
}
