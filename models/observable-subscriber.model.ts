import { TickModel } from "./tick.model";

export interface ObservableSubscriberModel {
  next: (tick: TickModel) => void;
  error: (error: any) => void;
  complete: () => void;
}
