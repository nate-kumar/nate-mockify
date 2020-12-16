export interface StringSelectItemModel {
  label: string;
  value: string;
}

export interface StringSelectPresetItemModel extends StringSelectItemModel {
  isPresetValue: boolean;
}
