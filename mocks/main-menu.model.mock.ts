
export class MenuItemModelMock {


  private _data: MenuItemModel = {
    title: null,
    url: null,
    label: null,
    icon: null,
    exact: null,
    ability: null,
    expanded: null,
    focused: null,
    subMenu: null,
    navigationExtras: null,
  };


  public withTitle ( title: MenuItemModel[ 'title' ] ): MenuItemModelMock {
    this._data.title = title;

    return this;
  }

  public withUrl ( url: MenuItemModel[ 'url' ] ): MenuItemModelMock {
    this._data.url = url;

    return this;
  }

  public withLabel ( label: MenuItemModel[ 'label' ] ): MenuItemModelMock {
    this._data.label = label;

    return this;
  }

  public withIcon ( icon: MenuItemModel[ 'icon' ] ): MenuItemModelMock {
    this._data.icon = icon;

    return this;
  }

  public withExact ( exact: MenuItemModel[ 'exact' ] ): MenuItemModelMock {
    this._data.exact = exact;

    return this;
  }

  public withAbility ( ability: MenuItemModel[ 'ability' ] ): MenuItemModelMock {
    this._data.ability = ability;

    return this;
  }

  public withExpanded ( expanded: MenuItemModel[ 'expanded' ] ): MenuItemModelMock {
    this._data.expanded = expanded;

    return this;
  }

  public withFocused ( focused: MenuItemModel[ 'focused' ] ): MenuItemModelMock {
    this._data.focused = focused;

    return this;
  }

  public withSubMenu ( subMenu: MenuItemModel[ 'subMenu' ] ): MenuItemModelMock {
    this._data.subMenu = subMenu;

    return this;
  }

  public withNavigationExtras ( navigationExtras: MenuItemModel[ 'navigationExtras' ] ): MenuItemModelMock {
    this._data.navigationExtras = navigationExtras;

    return this;
  }


  public model (): MenuItemModel {
    return this._data;
  }

}