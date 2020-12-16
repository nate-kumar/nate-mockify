import { RoleModel } from "./role.model";

export interface RoleRequest {
  role?: RoleModel;
  roles?: RoleModel[];
}
