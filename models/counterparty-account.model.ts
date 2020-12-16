import { CounterpartyModel } from "./counterparty.model";

export class CounterpartyAccountModel {
  id: string;
  accountNumber?: string;
  actions?: string[];
  operatorInfo?: string;
  alias?: string;
  bank?: string;
  bankAccountId?: string;
  intermediaryBank?: string;
  country?: string;
  currencies?: string[];
  fedWire?: string;
  iban?: string;
  isBeneficiary?: boolean;
  isPayer?: boolean;
  parentId?: string;
  preferredCharge?: string;
  preferredPriority?: string;
  routingNumber?: string;
  sortCodeUK?: string;
  bic_swift?: string;
  bankCode?: string;
  additonalCountryAccountInfo?: string;
  ibanIsValid?: boolean;
  valid?: boolean;
  validKey?: string;
  disabled?: boolean;
  expanded?: boolean;
  preferredPaymentNetwork?: string;
  parent?: CounterpartyModel;
  type: string;
  number?: string;
  name?: string;
  bic?: string;
}
