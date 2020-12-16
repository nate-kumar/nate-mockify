export interface ClientListModel {
  id: string;
  isCurrent: boolean;
  lastAccessed: string;
  name: string;
  paymentsState: string;
  tradingState: string;
  currentClientId: string;
}
