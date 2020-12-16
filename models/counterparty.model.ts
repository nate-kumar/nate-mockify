import { CounterpartyAccountModel } from "./counterparty-account.model";

export interface CounterpartyModel {
  accounts: CounterpartyAccountModel[];
  address1: string;
  address2: string;
  alias: string;
  city: string;
  contactName: string;
  country: string;
  email: string;
  id: string;
  isBeneficiary: boolean;
  isPayer: boolean;
  isSelf: boolean;
  name: string;
  postCode: string;
  primaryType: string;
  shortfall: number;
  shortfallCurrencyCode: string;
  paymentReason: string[];
  subType: string;
  subsidiary: string;
  thirdPartyType: string;
  thirdPartyTypeOther: string;
  status?: string;
  actions: string[];
  state: string;
  currencies: string[];
  accountsCount: number;
  firstName: string;
  county: string;
  lastName: string;
  draft: CounterpartyModel;
  valid?: boolean;
  validKey?: string;
  disabled?: boolean;
  bankAccountId?: string;
  isIban?: boolean;
  searchTerms?: string;
}

