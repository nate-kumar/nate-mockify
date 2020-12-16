export interface OrderCorpModel {
  id: string;
  name: string;
  isCurrent: boolean;
  lastAccessed: string;
  tradingState: string;
  paymentsState: string;
  trade: boolean;
}
