import { RoleModel } from "./role.model";


export class RoleMock {


  // TODO: RS add permissions mock
  private _data: RoleModel = {
    id: undefined,
    name: 'Test role',
    users: 0,
    permissions: {},
    isSuspended: false,
    actions: [],
    type: 'global'
  };


  public withId ( id: RoleModel[ 'id' ] ): RoleMock {
    this._data.id = id;

    return this;
  }

  public withName ( name: RoleModel[ 'name' ] ): RoleMock {
    this._data.name = name;

    return this;
  }

  public withUsers ( users: RoleModel[ 'users' ] ): RoleMock {
    this._data.users = users;

    return this;
  }
  
  public withPermissions ( permissions: RoleModel[ 'permissions' ] ): RoleMock {
    this._data.permissions = permissions;

    return this;
  }

  public withIsSuspended ( isSuspended: RoleModel[ 'isSuspended' ] ): RoleMock {
    this._data.isSuspended = isSuspended;

    return this;
  }

  public withActions ( actions: RoleModel[ 'actions' ] ): RoleMock {
    this._data.actions = actions;

    return this;
  }

  public withType ( type: RoleModel[ 'type' ] ): RoleMock {
    this._data.type = type;

    return this;
  }


  public model (): RoleModel {
    return this._data;
  }


}
