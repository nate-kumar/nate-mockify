import { TransactionCounterpartyModel } from "./transaction-counterparty.model";

export interface TransactionModel {
  id: string;
  valueDate?: string;
  entryDate?: string;
  entryTime?: string;
  amount: number;
  currency: string;
  reference?: string;
  payer?: TransactionCounterpartyModel[];
  beneficiary?: TransactionCounterpartyModel[];
  remittanceInfo?: string;
  sepa?: boolean;
  clientName?: string;
  type?: string;
  settlementDate?: string;
  checked?: boolean;
}
