import { AlertButton } from '@ionic/core';
import { DateModel } from "./date.model";
import { OrderCurrencyAmountModel } from "./order-currency-amount.model";
import { OrderPersonModel } from "./order-person.model";
import { PaymentIbanModel } from "./payment-iban.model";
import { PaymentsConfirmationDocumentModel } from "./payments-confirmation-document.model";
import { PaymentsClientModel } from "./payments-client.model";
import { PaymentsUserAccountModel } from "./payments-user-account.model";

// This is now using the v2 structure
export interface PaymentModel {
  actions: string[];
  id: string;
  clientOrderId: string;
  state: string;
  bookedDate: DateModel;
  valueDate: DateModel;
  paymentEstimatedDated: DateModel;
  operator: OrderPersonModel;
  validator: OrderPersonModel;
  validatorComment: string;
  paymentAmount: OrderCurrencyAmountModel;
  paymentPurpose: string;
  paymentReference: string;
  vanityId: string;
  paymentTags: string[];
  network: string;
  priority: string;
  chargePrice: OrderCurrencyAmountModel;
  priorityCharge: OrderCurrencyAmountModel;
  totalCost: OrderCurrencyAmountModel;
  tradeType: string;
  paymentType: string;
  source: PaymentsUserAccountModel;
  destination: PaymentsUserAccountModel;
  iban?: PaymentIbanModel;
  client?: PaymentsClientModel;
  confirmationDocument?: PaymentsConfirmationDocumentModel;
  buttons: AlertButton[];
}
