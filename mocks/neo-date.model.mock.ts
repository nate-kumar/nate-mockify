
export class NeoDateModelMock {


  private _data: NeoDateModel = {
    date: null,
    dateTime: null,
    time: null,
    timestamp: null,
  };


  public withDate ( date: NeoDateModel[ 'date' ] ): NeoDateModelMock {
    this._data.date = date;

    return this;
  }

  public withDateTime ( dateTime: NeoDateModel[ 'dateTime' ] ): NeoDateModelMock {
    this._data.dateTime = dateTime;

    return this;
  }

  public withTime ( time: NeoDateModel[ 'time' ] ): NeoDateModelMock {
    this._data.time = time;

    return this;
  }

  public withTimestamp ( timestamp: NeoDateModel[ 'timestamp' ] ): NeoDateModelMock {
    this._data.timestamp = timestamp;

    return this;
  }


  public model (): NeoDateModel {
    return this._data;
  }

}