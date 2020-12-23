import ConsoleWarningParamsModel from '../../../mockify/models/console-warning-params.model';
import ConsoleWarningTypesEnum from '../../enums/console-warning-types.enum';
import ConsoleWarningSegmentModel from '../../models/console-warning-segment.model';
import ConsoleWarningTypesModel from '../../models/console-warning-types.model';

const consoleWarningObject: ConsoleWarningTypesModel = {};

export default function addConsoleWarning(
  type: ConsoleWarningTypesEnum,
  messageCode: string,
  params: ConsoleWarningParamsModel
): void {
  if ( !messageCode ) { 
    type = ConsoleWarningTypesEnum.error
  }

  const warningSegments: ConsoleWarningSegmentModel[] =
    getWarningSegments(
      type,
      messageCode,
      params
    )

  consoleWarningObject?.[ type ]?.push( warningSegments ) || ( consoleWarningObject[ type ] = [ warningSegments ] );
}

export function getConsoleWarningsObject(): ConsoleWarningTypesModel {
  return consoleWarningObject;
}

function getWarningSegments(
  type: ConsoleWarningTypesEnum,
  messageCode: string,
  params: ConsoleWarningParamsModel
): ConsoleWarningSegmentModel[] {
  let segments = [];

  if ( type ) {
    const typeSegment: ConsoleWarningSegmentModel = 
      {
        colour: getColour( type ),
        text: getPrefix( type )
      }
    segments.push( typeSegment )
  }

  if ( params ) {
    const subjectSegment: ConsoleWarningSegmentModel =
      {
        colour: '\x1b[1m',
        text: params.className || params.fileName || params.keyName || ''
      }
    segments.push( subjectSegment )
  }

  if ( messageCode ) {
    const messageSegment: ConsoleWarningSegmentModel = 
      {
        colour: '\x1b[0m',
        text: getMessage( messageCode )
      }
    segments.push( messageSegment )
  }

  return segments;
}

function getColour( type: ConsoleWarningTypesEnum ): string {
  if ( type === ConsoleWarningTypesEnum.ignore ) {
    return '\x1b[33m';
  }
  if ( type === ConsoleWarningTypesEnum.invalid ) {
    return '\x1b[31m'
  }
  if ( type === ConsoleWarningTypesEnum.error ) {
    return '\x1b[31m'
  }

  return '\x1b[0m'
}

function getPrefix( type: ConsoleWarningTypesEnum ): string {
  if ( type === ConsoleWarningTypesEnum.ignore ) {
    return 'IGNORE';
  }
  if ( type === ConsoleWarningTypesEnum.invalid ) {
    return 'INVALID';
  }
  if ( type === ConsoleWarningTypesEnum.error ) {
    return 'ERROR'
  }
  
  return ''
}

function getMessage( messageCode: string ) {
  if ( messageCode === 'not-overwritten' ) {
    return `Existing file found and not overwritten`;
  }
  if ( messageCode === 'constructor' ) {
    return `Constructor present in model file`;
  }
  if ( messageCode === 'class-name-empty' ) {
    return `Class name is empty`;
  }
  if ( messageCode === 'keys-empty' ) {
    return `Keys are empty, check for nested objects`;
  }
  if ( messageCode === 'generic-keys' ) {
    return `Generic syntax (e.g. [key: string]: string) not supported`;
  }
  if ( messageCode === 'invalid-file-type' ) {
    return `Invalid file type`;
  }

  return `Something went wrong`
}

module.exports;