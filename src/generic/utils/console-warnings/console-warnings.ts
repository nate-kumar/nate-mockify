import ConsoleWarningParamsModel from '../../../mockify/models/console-warning-params.model';
import ConsoleWarningSegmentModel from '../../models/console-warning-segment.model';

export default function consoleWarning(
  type: string,
  messageCode: string,
  params: ConsoleWarningParamsModel
) {
  if ( !messageCode ) { 
    type = 'error'
  }

  const warningSegments: ConsoleWarningSegmentModel[] =
    getWarningSegments(
      type,
      messageCode,
      params
    )

  const warningSegmentsArray: string[] = 
    warningSegments
      .map(
        ( warningSegment: ConsoleWarningSegmentModel ) => warningSegment.colour + warningSegment.text
      )

  console.warn( '\r\n', ...warningSegmentsArray );
}

function getWarningSegments(
  type: string,
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

function getColour( type: string ): string {
  if ( type === 'SKIPPED' ) {
    return '\x1b[33m';
  }
  if ( type === 'ERROR' ) {
    return '\x1b[31m'
  }
  return '\x1b[0m'
}

function getPrefix( type: string ): string {
  if ( type === 'SKIPPED' ) {
    return 'SKIPPED';
  }
  if ( type === 'ERROR' ) {
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
  return `Something went wrong`
}

module.exports;