import { PermissionOptionsModel } from "./permissions-options.model";

export interface PermissionActionsModel { // TODO should some of these be permissionsOptions models instead of permissionsActions? [Y]
  ability?: boolean;
  setVisibilityClient?: PermissionOptionsModel;
  approve?: PermissionOptionsModel;
  create?: PermissionOptionsModel;
  delete?: PermissionOptionsModel;
  edit?: PermissionOptionsModel;
  submit?: PermissionOptionsModel;
  view?: PermissionOptionsModel;
  reject?: PermissionOptionsModel;
  user?: PermissionOptionsModel;
  modify?: PermissionOptionsModel;
  suspend?: PermissionOptionsModel;
  suspendAll?: PermissionOptionsModel;
  disconnect?: PermissionOptionsModel;
  disconnectAll?: PermissionOptionsModel;
  download?: PermissionOptionsModel;
  cancel?: PermissionOptionsModel;
  massUpload?: PermissionOptionsModel;
  withdraw?: PermissionOptionsModel;
  link?: PermissionOptionsModel;
  viewLedger?: PermissionOptionsModel;
  review?: PermissionOptionsModel;
  manage?: PermissionOptionsModel;
  quote?: PermissionOptionsModel;
  book?: PermissionOptionsModel;
  m2M?: PermissionOptionsModel;
  disableTrading?: PermissionOptionsModel;
  disablePayments?: PermissionOptionsModel;
  suspendAllCounterparties?: PermissionOptionsModel;
  suspendAllOrders?: PermissionOptionsModel;
  neo_DisablePayments?: PermissionOptionsModel;
  neo_DisableTrading?: PermissionOptionsModel;
  neo_SuspendAllCounterparties?: PermissionOptionsModel;
  neo_SuspendAllOrders?: PermissionOptionsModel;
  poc?: PermissionOptionsModel;
  documentUpload?: PermissionOptionsModel;
  ledgerReconcile?: PermissionOptionsModel;
  ledgerUpload?: PermissionOptionsModel;
  l2Support?: PermissionOptionsModel;
  deposit?: PermissionActionsModel;
  archive?: PermissionActionsModel;
  suspendAllPayments?: PermissionActionsModel;
  viewUploadDoc?: PermissionActionsModel;
  viewConfirmationDoc?: PermissionActionsModel;
  neo_SuspendAllPayments?: PermissionActionsModel;
  mtf?: PermissionActionsModel;
  viewHiddenDocs?: PermissionActionsModel;
  settlement?: PermissionActionsModel;
  editCommission?: PermissionActionsModel;
  supportManage?: PermissionActionsModel;
  sysOps?: PermissionActionsModel;
}
