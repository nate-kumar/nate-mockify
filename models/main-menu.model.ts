import { NavigationExtras } from "@angular/router";
import { ConditionalLogicModel } from "./conditional-logic.model";

export class MenuItemModel {
  title: string;
  url: string;
  label: string;
  icon: string;
  exact?: boolean = false;
  ability?: string | ConditionalLogicModel;
  expanded?: boolean = false;
  focused?: boolean;
  subMenu?: MenuItemModel[];
  navigationExtras?: NavigationExtras;
}
