import { FormattedTickSideModel } from "./formatted-tick-side.model";

export class FormattedTickModel { // TODO all properties optional?
  ask?: FormattedTickSideModel;
  bid?: FormattedTickSideModel;
  price?: FormattedTickSideModel;
}
