import { Subscription } from "rxjs";

export interface CounterpartyFormSubscriptionModel {
  field: string;
  subscription: Subscription;
  handler: ( value: string ) => void;
}
