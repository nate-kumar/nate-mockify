import ConsoleWarningParamsModel from '../../../mockify/models/console-warning-params.model';
import ConsoleWarningSegmentModel from '../../models/console-warning-segment.model';

const consoleWarningsArray: ConsoleWarningSegmentModel[][] = [];

export default function addConsoleWarning(
  type: string,
  messageCode: string,
  params: ConsoleWarningParamsModel
): void {
  if ( !messageCode ) { 
    type = 'error'
  }

  const warningSegments: ConsoleWarningSegmentModel[] =
    getWarningSegments(
      type,
      messageCode,
      params
    )

  consoleWarningsArray.push( warningSegments );
}

export function getConsoleWarningsArray(): ConsoleWarningSegmentModel[][] {
  return consoleWarningsArray;
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
  if ( type === 'IGNORE' ) {
    return '\x1b[33m';
  }
  if ( type === 'INVALID' ) {
    return '\x1b[31m'
  }
  if ( type === 'ERROR' ) {
    return '\x1b[31m'
  }
  return '\x1b[0m'
}

function getPrefix( type: string ): string {
  if ( type === 'IGNORE' ) {
    return 'IGNORE';
  }
  if ( type === 'INVALID' ) {
    return 'INVALID';
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
  if ( messageCode === 'invalid-file-type' ) {
    return `Invalid file type`;
  }

  return `Something went wrong`
}

module.exports;