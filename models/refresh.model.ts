import { Moment } from "moment";

export interface RefreshInterface {
  lastUpdated: Moment;
  loadingState: number;
  handler: () => void;
}
