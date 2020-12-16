import { MenuItemModel } from "./main-menu.model";

export interface MainMenuSubMenuToggleModel {
  opened: boolean;
  menu: MenuItemModel[];
  parentMenu: MenuItemModel;
  top?: string;
  bottom?: string;
  left?: string;
}
