export class PaymentShortFormModel {
  amount: number;
  currencyCode: string;
  originAccountKey: string;
  beneficiaryAccountKey: string;
  paymentReference?: string;
  purpose?: string;
  tag?: string;
  source?: any;
  ibanId?: string;
  sourceName?: string;
  sourceIban?: string;
}
