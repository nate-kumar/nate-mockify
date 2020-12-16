import { MessageDisplayModel } from "./message-display.model";
import { ActionType } from "../_enums/action-type.enum";
import { MessageDisplayType } from "../_enums/message-display-type.enum";


export class NeoMessageDisplayMock {


  private _data: MessageDisplayModel = {
    subject: 'documents.upload.processing.success.subject',
    message: 'documents.upload.processing.success.message',
    actionType: ActionType.positive,
    displayType: MessageDisplayType.growl
  };


  public withSubject ( subject: MessageDisplayModel[ 'subject' ] ): NeoMessageDisplayMock {
    this._data.subject = subject;

    return this;
  }

  public withMessage ( message: MessageDisplayModel[ 'message' ] ): NeoMessageDisplayMock {
    this._data.message = message;

    return this;
  }

  public withDuration ( duration: MessageDisplayModel[ 'duration' ] ): NeoMessageDisplayMock {
    this._data.duration = duration;

    return this;
  }

  public withActionType ( actionType: MessageDisplayModel[ 'actionType' ] ): NeoMessageDisplayMock {
    this._data.actionType = actionType;

    return this;
  }

  public withShouldStack ( shouldStack: MessageDisplayModel[ 'shouldStack' ] ): NeoMessageDisplayMock {
    this._data.shouldStack = shouldStack;

    return this;
  }

  public withDisplayType ( displayType: MessageDisplayModel[ 'displayType' ] ): NeoMessageDisplayMock {
    this._data.displayType = displayType;

    return this;
  }

  public withButtons ( buttons: MessageDisplayModel[ 'buttons' ] ): NeoMessageDisplayMock {
    this._data.buttons = buttons;

    return this;
  }

  public withInputs ( inputs: MessageDisplayModel[ 'inputs' ] ): NeoMessageDisplayMock {
    this._data.inputs = inputs;

    return this;
  }

  public withTranslationVariables ( translationVariables: MessageDisplayModel[ 'translationVariables' ] ): NeoMessageDisplayMock {
    this._data.translationVariables = translationVariables;

    return this;
  }

  public withClosed ( closed: MessageDisplayModel[ 'closed' ] ): NeoMessageDisplayMock {
    this._data.closed = closed;

    return this;
  }

  public withAsync ( async: MessageDisplayModel[ 'async' ] ): NeoMessageDisplayMock {
    this._data.async = async;

    return this;
  }

  public withTag ( tag: MessageDisplayModel[ 'tag' ] ): NeoMessageDisplayMock {
    this._data.tag = tag;

    return this;
  }


  public model (): MessageDisplayModel {
    return this._data;
  }

}
