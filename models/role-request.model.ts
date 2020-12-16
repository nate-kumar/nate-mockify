import { RoleModel } from "./role.model";

export interface RoleRequestModel {
  role?: RoleModel;
  roles?: RoleModel[];
}
