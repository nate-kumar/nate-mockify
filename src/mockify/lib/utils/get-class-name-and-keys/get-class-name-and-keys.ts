import { ClassNameAndKeysModel } from '../../../models/template-variables.model';
import { SegmentsModel } from './../../../models/segments.model';

export function getClassNameAndKeys( modelFileBuffer: Buffer ) {
  // Get code as string from .model.ts file
  const modelFileBufferString: string = modelFileBuffer.toString();
  const linesOfCodeArray: string[] = modelFileBufferString.split( '\r\n' );

  // Split code into sections of interest
  const {
    lineExportInterface,
    linesOfKeys
  }: SegmentsModel = getSegmentsFromModelLines( linesOfCodeArray );

  // Get interface name in camel case, e.g. DateModel
  const className: string = getClassName( lineExportInterface ) || '';

  // Get all keys from model
  const keys: string[] = getModelKeys( linesOfKeys );

  const classNameAndKeys: ClassNameAndKeysModel =
    {
      className,
      keys
    }

  return classNameAndKeys;
}

function getSegmentsFromModelLines( linesOfCodeArray: string[] ) {
  const indexExportInterfaceOriginal: number =
    linesOfCodeArray
      ?.findIndex(
        ( line: string ) => 
          line.includes( 'interface ' )
          || line.includes( 'class ' )
      );

  linesOfCodeArray =
    [ ...linesOfCodeArray ]
      ?.slice(
        indexExportInterfaceOriginal
      )

  const indexExportInterface: number =
    linesOfCodeArray
      ?.findIndex(
        ( line: string ) => 
          line.includes( 'interface ' )
          || line.includes( 'class ' )
      );
  const lineExportInterface: string = linesOfCodeArray[ indexExportInterface ];

  const indexCloseCurlyBrace: number =
    linesOfCodeArray
      ?.findIndex(
        ( line: string ) => line.includes( '}' )
      );
  const lineCloseCurlyBrace: string = linesOfCodeArray[ indexCloseCurlyBrace ];

  const indexStartOfKeys: number = indexExportInterface + 1;
  const indexEndOfKeys: number = indexCloseCurlyBrace - 1;

  const linesOfKeys: string[] =
    linesOfCodeArray
      .splice(
        indexStartOfKeys,
        indexEndOfKeys
      )

  const segments: SegmentsModel =
    {
      lineExportInterface,
      linesOfKeys,
      lineCloseCurlyBrace
    }

  return segments;
}

function getClassName( lineExportInterface: string ) {
  const patternInterface: string = 'interface ';
  const patternClass: string = 'class ';
  const patternOpenCurlyBrace: string = '{'

  const indexPatternInterface: number = lineExportInterface?.indexOf( patternInterface );
  const indexPatternClass: number = lineExportInterface?.indexOf( patternClass );
  const indexStartOfClassName: number =
    indexPatternInterface !== -1
      ? indexPatternInterface + patternInterface.length
      : indexPatternClass + patternClass.length;
  const indexEndOfClassName: number = lineExportInterface?.indexOf( patternOpenCurlyBrace ) - patternOpenCurlyBrace.length;

  if (
    indexPatternInterface > 0
    || indexPatternClass > 0
  ) {
    const classNameCamelCase =
      lineExportInterface
        .substring(
          indexStartOfClassName,
          indexEndOfClassName
        )

    return classNameCamelCase;
  }
}

function getModelKeys( linesOfKeys: string[] ): string[] {
  const keys: string[] = 
    linesOfKeys
      .map(
        ( lineOfKey: string ) => getKey( lineOfKey )
      )

  return keys;
}

function getKey( lineOfKey: string ) {
  const trimmedLineOfKey: string =
    lineOfKey
      .trim();
  const indexOfColon: number =
    trimmedLineOfKey
      .indexOf( ':' )
  const indexOfQuestionMark: number =
    trimmedLineOfKey
      .indexOf( '?' )
  const indexOfExclamationMark: number =
    trimmedLineOfKey
      .indexOf( '!' )

  const indexStartOfKey: number = 0;
  let indexEndOfKey: number;

  if ( indexOfExclamationMark !== -1 ) {
    indexEndOfKey = indexOfExclamationMark;
  }
  else if ( indexOfQuestionMark !== -1 ) {
    indexEndOfKey = indexOfQuestionMark;
  }
  else if ( indexOfColon !== -1 ) {
    indexEndOfKey = indexOfColon;
  }
  else {
    throw Error( 'Unable to identify key' )
  }

  const key: string = 
    trimmedLineOfKey
      .substring(
        indexStartOfKey,
        indexEndOfKey
      )

  return key;
}

module.exports;