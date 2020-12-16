import { PermissionsModel } from "./permissions.model";

export interface RoleModel {
  id: string;
  name: string;
  users?: number;
  permissions: PermissionsModel;
  isSuspended?: boolean;
  actions?: string[];
  type: string;
}
