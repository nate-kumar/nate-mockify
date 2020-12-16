import { WidgetModel } from "./widget.model";

export interface WidgetDashboardLayout {
  version?: string;
  widgets: WidgetModel[];
}
