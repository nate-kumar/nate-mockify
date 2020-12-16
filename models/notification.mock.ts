import { NeoNotificationModel } from "./notification.model";


export class NeoNotificationMock {


  // TODO: RS Add mock data
  private _data: NeoNotificationModel = {
    dateRaised: null,
    id: null,
    message: null,
    priority: null,
    state: null,
    subject: null,
    type: null
  };


  public withDateRaised ( dateRaised: NeoNotificationModel[ 'dateRaised' ] ): NeoNotificationMock {
    this._data.dateRaised = dateRaised;

    return this;
  }

  public withId ( id: NeoNotificationModel[ 'id' ] ): NeoNotificationMock {
    this._data.id = id;

    return this;
  }

  public withMessage ( message: NeoNotificationModel[ 'message' ] ): NeoNotificationMock {
    this._data.message = message;

    return this;
  }

  public withPriority ( priority: NeoNotificationModel[ 'priority' ] ): NeoNotificationMock {
    this._data.priority = priority;

    return this;
  }

  public withState ( state: NeoNotificationModel[ 'state' ] ): NeoNotificationMock {
    this._data.state = state;

    return this;
  }

  public withSubject ( subject: NeoNotificationModel[ 'subject' ] ): NeoNotificationMock {
    this._data.subject = subject;

    return this;
  }

  public withType ( type: NeoNotificationModel[ 'type' ] ): NeoNotificationMock {
    this._data.type = type;

    return this;
  }

  public withData ( data: NeoNotificationModel[ 'data' ] ): NeoNotificationMock {
    this._data.data = data;

    return this;
  }

  public withFullMessage ( fullMessage: NeoNotificationModel[ 'fullMessage' ] ): NeoNotificationMock {
    this._data.fullMessage = fullMessage;

    return this;
  }


  public model (): NeoNotificationModel {
    return this._data;
  }


}
