import { PermissionsModel } from "./permissions.model";
import { UserTypeEnums } from "../_enums/user-type.model";

export class UserModel { // TODO
  id?: string;
  email: string;
  firstName: string;
  lastName: string;
  status?: string;
  bgColour?: string[];
  roles?: string[];
  vanityCode?: string;
  actions?: string[];
  permissions?: PermissionsModel;
  type?: UserTypeEnums;
  isSysuser?: boolean;

  constructor ( user: UserModel | { [ key: string ]: any } = {} ) {
    for ( let field in user ) {
      if ( user.hasOwnProperty( field ) && user[field] ) {
        this[field] = user[field];
      }
    }
  }
}
