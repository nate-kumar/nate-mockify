import { ConditionalLogicModel } from "./conditional-logic.model";
import { WidgetConfigModel } from "./widget-config.model";

export interface WidgetModel {
  id: string;
  name?: string;
  type: string;
  icon?: string;
  size: string;
  config?: WidgetConfigModel;
  tags?: string | string[];
  abilities?: string | ConditionalLogicModel;
  widgetSettings?: string[];
}
