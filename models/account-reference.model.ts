import { CountrySelectOptions } from '../services/countries-service/countries.model';
import { CurrencySelectOptionModel } from "./currencies-select-option.model";
import { AccountReferencePriorityModel } from "./account-reference-priority.model";


export interface AccountReferenceDataModel {
  paymentNetworks: { value: string }[];
  priorities: AccountReferencePriorityModel[];
  charges: { value: string }[];
  currencies?: CurrencySelectOptionModel[];
  countries?: CountrySelectOptions[];
}
