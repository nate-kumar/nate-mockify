import { Moment } from "moment";

export interface RefreshModel {
  lastUpdated: Moment;
  loadingState: number;
  handler: () => void;
}
