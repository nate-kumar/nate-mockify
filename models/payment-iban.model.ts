export interface PaymentIbanModel {
  id: string;
  corpName: string;
  alias: string;
  iban: string;
  bic: string;
  country: string;
  bankName: string;
  ibanType: string;
  currencies: string[];
}
