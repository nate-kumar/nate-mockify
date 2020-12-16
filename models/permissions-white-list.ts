import { PermissionActionEnum } from "../_enums/permissions.enum";

/* HOW TO ADD NEW PERMISSIONS
 *  1) Adding a new permission Group:
 *  - Add permission group to 'PermissionsModel' with type 'PermissionActionsModel' e.g `newPermissionsGroup?: PermissionActionsModel;`
 *  - Add Permission group and all it's corresponding actions to the 'activePermissionsMap' (Use only actions from 'PermissionActionEnum')
 *  e.g
 *  ```
 *  newPermissionsGroup: [
 *    PermissionActionEnum.view,
 *    PermissionActionEnum.create
 *  ]
 *  ```
 *
 *  2) Adding new Action:
 *  - Add action to 'PermissionActionEnum' e.g. `newAction = 'newAction'`
 *  - Add to action to PermissionActionsModel e.g `newAction?: PermissionOptionsModel`;
 */

export const activePermissionsMap: { [key: string]: string[] } = { // TODO indentation and new file?
  iban: [
    PermissionActionEnum.view
  ],
  system: [
    PermissionActionEnum.user
  ],
  corps: [
    PermissionActionEnum.create,
    PermissionActionEnum.manage,
    PermissionActionEnum.supportManage
  ],
  user: [
    PermissionActionEnum.view,
    PermissionActionEnum.create,
    PermissionActionEnum.modify,
    PermissionActionEnum.delete,
    PermissionActionEnum.suspend,
    PermissionActionEnum.disconnect,
    PermissionActionEnum.suspendAll,
    PermissionActionEnum.disconnectAll
  ],
  role: [
    PermissionActionEnum.view,
    PermissionActionEnum.create,
    PermissionActionEnum.modify,
    PermissionActionEnum.delete,
    PermissionActionEnum.suspend
  ],
  document: [
    PermissionActionEnum.view,
    PermissionActionEnum.setVisibilityClient
  ],
  order: [
    PermissionActionEnum.view,
    PermissionActionEnum.create,
    PermissionActionEnum.modify,
    PermissionActionEnum.cancel,
    PermissionActionEnum.book,
    PermissionActionEnum.suspend,
    PermissionActionEnum.massUpload,
    PermissionActionEnum.suspendAll,
    PermissionActionEnum.review
  ],
  wallet: [
    PermissionActionEnum.view,
    PermissionActionEnum.create,
    PermissionActionEnum.modify,
    PermissionActionEnum.delete,
    PermissionActionEnum.suspend,
    PermissionActionEnum.viewLedger,
    PermissionActionEnum.archive
  ],
  adminSettings: [
    PermissionActionEnum.suspendAllOrders,
    PermissionActionEnum.disableTrading,
    PermissionActionEnum.disablePayments,
    PermissionActionEnum.suspendAllCounterparties,
    PermissionActionEnum.suspendAllPayments
  ],
  optionsOrder: [
    PermissionActionEnum.view,
    PermissionActionEnum.create,
    PermissionActionEnum.submit,
    PermissionActionEnum.viewUploadDoc,
    PermissionActionEnum.viewConfirmationDoc,
    PermissionActionEnum.delete,
    PermissionActionEnum.quote,
    PermissionActionEnum.book,
    PermissionActionEnum.m2M,
    PermissionActionEnum.editCommission
  ],
  payment: [
    PermissionActionEnum.book,
    PermissionActionEnum.create,
    PermissionActionEnum.cancel,
    PermissionActionEnum.massUpload,
    PermissionActionEnum.modify,
    PermissionActionEnum.review,
    PermissionActionEnum.reviewInternal,
    PermissionActionEnum.suspend,
    PermissionActionEnum.suspendAll,
    PermissionActionEnum.view
  ],
  preview: [
    PermissionActionEnum.poc
  ],
  counterparty: [
    PermissionActionEnum.view,
    PermissionActionEnum.create,
    PermissionActionEnum.modify,
    PermissionActionEnum.review,
    PermissionActionEnum.delete,
    PermissionActionEnum.suspend,
    PermissionActionEnum.massUpload
  ],
  neoOps: [
    PermissionActionEnum.neo_SuspendAllOrders,
    PermissionActionEnum.neo_DisableTrading,
    PermissionActionEnum.neo_SuspendAllCounterparties,
    PermissionActionEnum.neo_SuspendAllPayments,
    PermissionActionEnum.mtf,
    PermissionActionEnum.ledgerUpload,
    PermissionActionEnum.ledgerReconcile,
    PermissionActionEnum.documentUpload,
    PermissionActionEnum.viewHiddenDocs,
    PermissionActionEnum.settlement,
    PermissionActionEnum.l2Support
  ],
  priceAlert: [
    PermissionActionEnum.manage,
    PermissionActionEnum.view
  ],
  margin: [
    PermissionActionEnum.view
  ],
  ledger: [
    PermissionActionEnum.view
  ]
};
