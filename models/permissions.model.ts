import { PermissionActionsModel } from "./permissions-actions.model";

export interface PermissionsModel {
  role?: PermissionActionsModel;
  trade?: PermissionActionsModel;
  user?: PermissionActionsModel;
  system?: PermissionActionsModel;
  payment?: PermissionActionsModel;
  document?: PermissionActionsModel;
  kyc?: PermissionActionsModel;
  wallet?: PermissionActionsModel;
  margin?: PermissionActionsModel;
  iban?: PermissionActionsModel;
  counterparty?: PermissionActionsModel;
  dashboard?: PermissionActionsModel;
  priceAlert?: PermissionActionsModel;
  order?: PermissionActionsModel;
  optionsOrder?: PermissionActionsModel;
  neoOps?: PermissionActionsModel;
  adminSettings?: PermissionActionsModel;
  reconciliation?: PermissionActionsModel;
  preview?: PermissionActionsModel;
  corps?: PermissionActionsModel;
  ledger?: PermissionActionsModel;
}
