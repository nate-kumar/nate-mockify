import { LeiNumberEnum } from "../_enums/lei-number.enum";

export interface CorpLeiNumberModel {
  number: string;
  renewalDate: string;
  status: LeiNumberEnum;
  leiCode?: string;
}
