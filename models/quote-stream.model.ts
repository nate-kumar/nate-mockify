import { FormattedQuotesModel } from "./formatted-quotes.model";
import { BehaviorSubject, Subscription } from "rxjs";
import { ISubscription } from "@microsoft/signalr";
import Timeout = NodeJS.Timeout;
import { ObservableSubscriberModel } from "./observable-subscriber.model";

export class QuoteStreamModel {
  rfqId: string;
  activeSubscriptions: number;
  data: FormattedQuotesModel;
  subject: BehaviorSubject<FormattedQuotesModel>;
  hubSubscription: Subscription;
  subscriber: ObservableSubscriberModel;
  subscriptionStream: ISubscription<ObservableSubscriberModel>;
  closeSubscription: Timeout;
  timeout: Timeout;
}
