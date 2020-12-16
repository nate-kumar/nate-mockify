import { IbanModel } from "./iban.model";

export class IbanModelMock {


  // TODO: RS Add mock data
  private _data: IbanModel = {
    id: null,
    country: null,
    alias: null,
    iban: null,
    allowedCurrencies: null,
    ibanType: null,
    wallets: null,
    accounts: null,
    bankName: null,
    bic: null,
    countryCode: null,
    accountExtension: null,
    accountNumber: null,
    currencies: null,
    corpName: null,
  };


  public withId ( id: IbanModel[ 'id' ] ): IbanModelMock {
    this._data.id = id;

    return this;
  }

  public withCountry ( country: IbanModel[ 'country' ] ): IbanModelMock {
    this._data.country = country;

    return this;
  }

  public withAlias ( alias: IbanModel[ 'alias' ] ): IbanModelMock {
    this._data.alias = alias;

    return this;
  }

  public withIban ( iban: IbanModel[ 'iban' ] ): IbanModelMock {
    this._data.iban = iban;

    return this;
  }

  public withAllowedCurrencies ( allowedCurrencies: IbanModel[ 'allowedCurrencies' ] ): IbanModelMock {
    this._data.allowedCurrencies = allowedCurrencies;

    return this;
  }

  public withIbanType ( ibanType: IbanModel[ 'ibanType' ] ): IbanModelMock {
    this._data.ibanType = ibanType;

    return this;
  }

  public withWallets ( wallets: IbanModel[ 'wallets' ] ): IbanModelMock {
    this._data.wallets = wallets;

    return this;
  }

  public withAccounts ( accounts: IbanModel[ 'accounts' ] ): IbanModelMock {
    this._data.accounts = accounts;

    return this;
  }

  public withBankName ( bankName: IbanModel[ 'bankName' ] ): IbanModelMock {
    this._data.bankName = bankName;

    return this;
  }

  public withBic ( bic: IbanModel[ 'bic' ] ): IbanModelMock {
    this._data.bic = bic;

    return this;
  }

  public withCountryCode ( countryCode: IbanModel[ 'countryCode' ] ): IbanModelMock {
    this._data.countryCode = countryCode;

    return this;
  }

  public withAccountExtension ( accountExtension: IbanModel[ 'accountExtension' ] ): IbanModelMock {
    this._data.accountExtension = accountExtension;

    return this;
  }

  public withAccountNumber ( accountNumber: IbanModel[ 'accountNumber' ] ): IbanModelMock {
    this._data.accountNumber = accountNumber;

    return this;
  }

  public withCurrencies ( currencies: IbanModel[ 'currencies' ] ): IbanModelMock {
    this._data.currencies = currencies;

    return this;
  }

  public withCorpName ( corpName: IbanModel[ 'corpName' ] ): IbanModelMock {
    this._data.corpName = corpName;

    return this;
  }


  public model (): IbanModel {
    return this._data;
  }


}
