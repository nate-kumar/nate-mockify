import { RoleModel } from "./role.model";


export class RoleModelMock {


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


  public withId ( id: RoleModel[ 'id' ] ): RoleModelMock {
    this._data.id = id;

    return this;
  }

  public withName ( name: RoleModel[ 'name' ] ): RoleModelMock {
    this._data.name = name;

    return this;
  }

  public withUsers ( users: RoleModel[ 'users' ] ): RoleModelMock {
    this._data.users = users;

    return this;
  }
  
  public withPermissions ( permissions: RoleModel[ 'permissions' ] ): RoleModelMock {
    this._data.permissions = permissions;

    return this;
  }

  public withIsSuspended ( isSuspended: RoleModel[ 'isSuspended' ] ): RoleModelMock {
    this._data.isSuspended = isSuspended;

    return this;
  }

  public withActions ( actions: RoleModel[ 'actions' ] ): RoleModelMock {
    this._data.actions = actions;

    return this;
  }

  public withType ( type: RoleModel[ 'type' ] ): RoleModelMock {
    this._data.type = type;

    return this;
  }


  public model (): RoleModel {
    return this._data;
  }


}
