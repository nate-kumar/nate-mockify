export class PaymentAccountModel {
  accountType: string;
  accountId: string;
  counterpartyId?: string;
  counterpartyAccountId?: string;
  walletId?: string;
  includeSourceAccountDetails?: boolean;
  sourceReference?: string;
}
