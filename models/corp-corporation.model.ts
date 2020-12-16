export interface CorpCorporationModel {
  id: string;
  lastAccessed: string;
  name: string;
  paymentsState: string;
  tradingState: string;
  isCurrent: boolean;
  isBranded: boolean;
  logoUrl: string;
  logoPreviewUrl: string;
  actions: string[];
}
