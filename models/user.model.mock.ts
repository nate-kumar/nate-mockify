import { UserModel } from "./user.model";


export class UserModelMock {


  private _data: UserModel = {
    id: undefined,
    email: 'test@neoftl.com',
    firstName: 'Frank',
    lastName: 'Scooby',
    status: undefined,
    bgColour: undefined,
    roles: undefined,
    vanityCode: undefined,
    actions: undefined,
    permissions: undefined,
    type: undefined,
    isSysuser: false
  };


  public withId ( id: UserModel[ 'id' ] ): UserModelMock {
    this._data.id = id;

    return this;
  }

  public witheEmail ( email: UserModel[ 'email' ] ): UserModelMock {
    this._data.email = email;

    return this;
  }

  public withFirstName ( firstName: UserModel[ 'firstName' ] ): UserModelMock {
    this._data.firstName = firstName;

    return this;
  }

  public withLastName ( lastName: UserModel[ 'lastName' ] ): UserModelMock {
    this._data.lastName = lastName;

    return this;
  }

  public withStatus ( status: UserModel[ 'status' ] ): UserModelMock {
    this._data.status = status;

    return this;
  }

  public withBgColour ( bgColour: UserModel[ 'bgColour' ] ): UserModelMock {
    this._data.bgColour = bgColour;

    return this;
  }

  public withRoles ( roles: UserModel[ 'roles' ] ): UserModelMock {
    this._data.roles = roles;

    return this;
  }

  public withVanityCode ( vanityCode: UserModel[ 'vanityCode' ] ): UserModelMock {
    this._data.vanityCode = vanityCode;

    return this;
  }
  public withActions ( actions: UserModel[ 'actions' ] ): UserModelMock {
    this._data.actions = actions;

    return this;
  }

  public withPermissions ( permissions: UserModel[ 'permissions' ] ): UserModelMock {
    this._data.permissions = permissions;

    return this;
  }

  public withType ( type: UserModel[ 'type' ] ): UserModelMock {
    this._data.type = type;

    return this;
  }

  public withIsSysuser ( isSysuser: UserModel[ 'isSysuser' ] ): UserModelMock {
    this._data.isSysuser = isSysuser;

    return this;
  }


  public model (): UserModel {
    return this._data;
  }


}
