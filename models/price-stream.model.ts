import { FormattedTicksModel } from "./formatted-ticks.model";
import { BehaviorSubject, Subscription } from "rxjs";
import { ISubscription } from "@microsoft/signalr";
import Timeout = NodeJS.Timeout;
import { ObservableSubscriberModel } from "./observable-subscriber.model";

export class PriceStreamModel {
  currencyPair: string;
  tenors: string[];
  tenorString: string;
  activeSubscriptions: number;
  data: FormattedTicksModel;
  subject: BehaviorSubject<FormattedTicksModel>;
  hubSubscription: Subscription;
  subscriber: ObservableSubscriberModel;
  subscriptionStream: ISubscription<ObservableSubscriberModel>;
  closeSubscription: Timeout;
  timeout: Timeout;
}
