import { CountrySelectOptions } from '../services/countries-service/countries.model';
import { CurrencySelectOptionModel } from "./currencies-select-option.model";

export interface AccountReferenceDataModel {
  paymentNetworks: { value: string }[];
  priorities: {
    label?: string;
    value: string;
  }[];
  charges: { value: string }[];
  currencies?: CurrencySelectOptionModel[];
  countries?: CountrySelectOptions[];
}
