import { OrderDisplayTypes } from "../_enums/order-preview.enum";

export interface OrderDisplayModel {
  field: string;
  type?: OrderDisplayTypes;
  rateFields?: string[];
  translationPrefix?: string;
  hiddenUntilRequested?: boolean;
  nestedField?: string;
}
