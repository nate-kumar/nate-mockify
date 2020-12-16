import { ICellRendererParams } from "ag-grid-community/dist/lib/rendering/cellRenderers/iCellRenderer";
import { ItemColourEnum } from "../_enums/item-colour.enum";

export interface ContextMenuActionListItemModel {
  text: string;
  handler: ( params?: ICellRendererParams ) => void;
  icon?: string;
  colour?: ItemColourEnum;
  disabled?: boolean;
  enableHandler?: () => void;
}
