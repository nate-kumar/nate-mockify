import { ReferenceDataObjectModel } from "./reference-data-object.model";

export interface ReferenceDataModel { // TODO spacing (Replace with Record<>)
  [key: string]: ReferenceDataObjectModel
}
