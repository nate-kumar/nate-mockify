import ConsoleWarningTypesEnum from '../../../generic/enums/console-warning-types.enum';
import ConsoleWarningSegmentModel from '../../../generic/models/console-warning-segment.model';
import addConsoleWarning from '../../../generic/utils/console-warnings/console-warnings';
import ConsoleWarningParamsModel from '../../../nate-mockify/models/console-warning-params.model'; // TODO

export default function addConsoleWarningMockify(
  type: ConsoleWarningTypesEnum,
  messageCode: string,
  params: ConsoleWarningParamsModel
) {
  const warningSegments: ConsoleWarningSegmentModel[] =
    getMockifyWarningSegments(
      type,
      messageCode,
      params
    )

  addConsoleWarning(
    type,
    warningSegments
  )
}

function getMockifyWarningSegments(
  type: ConsoleWarningTypesEnum,
  messageCode: string,
  params: ConsoleWarningParamsModel
): ConsoleWarningSegmentModel[] {
  let segments = [];

  if ( !messageCode ) { 
    type = ConsoleWarningTypesEnum.error
  }

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