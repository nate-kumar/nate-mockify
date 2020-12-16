import { RowClickedEvent } from 'ag-grid-community';
import { MtfTransactionModel } from "./mtf-transaction.model";

export interface SelectedTransactionModel {
  rowNode: RowClickedEvent;
  transaction: MtfTransactionModel;
}
