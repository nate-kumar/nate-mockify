import { ICellRendererParams } from "ag-grid-community";
import { MtfClient2Model } from "./mtf-client-2.model";

export class MtfApprovalInformation {
  type: string;
  clients: MtfClient2Model[];
  originalValueField: string;
  checkMatch: (value: string, parameters: ICellRendererParams) => void;
  approve: (transactionId: string, corpId: string, parameters: ICellRendererParams) => void;
}
