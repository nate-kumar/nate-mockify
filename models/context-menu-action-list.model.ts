import { ContextMenuActionListItemModel } from "./context-menu-action-list-item.model";

export interface ContextMenuActionListModel {
  $event: MouseEvent;
  title?: string;
  items: ContextMenuActionListItemModel[];
}
