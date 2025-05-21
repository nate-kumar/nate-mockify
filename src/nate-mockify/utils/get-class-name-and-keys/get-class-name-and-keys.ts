import ClassNameAndKeysModel from '../../models/class-name-and-keys';
import ClassLineSegmentsModel from '../../models/class-line-segments.model';
import ConsoleWarningTypesEnum from '../../../generic/enums/console-warning-types.enum';
import addConsoleWarningMockify from '../console-warnings/console-warnings';

export default function getClassNameAndKeys( modelFileText: string ) {
  // Get code as string from .model.ts file
  const modelFileBufferString: string = modelFileText.toString();
  const linesOfCodeArray: string[] = modelFileBufferString.split( '\r\n' );

  // Split code into sections of interest
  const {
    lineExportInterface,
    linesOfKeys,
    fileErrors
  }: ClassLineSegmentsModel = getSegmentsFromModelLines( linesOfCodeArray );

  let classNameAndKeys: ClassNameAndKeysModel;
  let className: string = '';
  let keys: string[] | null = null;

  if ( lineExportInterface ) {
    // Get interface name in camel case, e.g. DateModel
    const classNameWithPotentialErrors: string = getClassName( lineExportInterface ) || '';
    className = handleClassNameErrors( classNameWithPotentialErrors );
  }

  if ( fileErrors?.length ) {
    handleFileErrors(
      fileErrors,
      className
    )
  }
  else if ( linesOfKeys.length > 0 ) {
    // Get all keys from model
    const keysWithPotentialErrors: string[] = getModelKeys( linesOfKeys );
    keys =
      handleKeysErrors(
        className,
        keysWithPotentialErrors
      );
  }

  classNameAndKeys =
    {
      className,
      keys
    }

  return classNameAndKeys;
}

function getSegmentsFromModelLines( linesOfCodeArray: string[] ): ClassLineSegmentsModel {
  let segments: ClassLineSegmentsModel =
    {
      lineExportInterface: '',
      linesOfKeys: [],
      lineCloseCurlyBrace: '',
      fileErrors: null
    };
  
  const indexOfConstructor: number =
    linesOfCodeArray
      ?.findIndex(
        ( line: string ) => line.includes( 'constructor' )
      )
  const hasConstructor: boolean = indexOfConstructor !== -1

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
      ?.filter(
        ( line: string ) => {
          const trimmed = line.trim();
          return trimmed.length > 0
            && trimmed.substring( 0, 1 ) !== '/'
        }
      )

  const indexExportInterface: number =
    linesOfCodeArray
      ?.findIndex(
        ( line: string ) => 
          line.includes( 'interface ' )
          || line.includes( 'class ' )
      );
  const lineExportInterface: string = linesOfCodeArray[ indexExportInterface ];
  segments.lineExportInterface = lineExportInterface;

  const indexCloseCurlyBrace: number =
    linesOfCodeArray
      ?.findIndex(
        ( line: string ) => line.includes( '}' )
      );
  const lineCloseCurlyBrace: string = linesOfCodeArray[ indexCloseCurlyBrace ];
  segments.lineCloseCurlyBrace = lineCloseCurlyBrace;

  if ( hasConstructor ) {
    segments.linesOfKeys = []
    segments.fileErrors = [ 'constructor' ]
  }
  else {
    const indexStartOfKeys: number = indexExportInterface + 1;
    const indexEndOfKeys: number = indexCloseCurlyBrace - 1;

    const linesOfKeys: string[] =
      linesOfCodeArray
        .splice(
          indexStartOfKeys,
          indexEndOfKeys
        )
    segments.linesOfKeys = linesOfKeys
  }

  return segments;
}

// TODO move to error handling utils file
function handleFileErrors( 
  fileErrors: string[],
  className?: string
) {
  if ( fileErrors.includes( 'constructor' ) ) {
    addConsoleWarningMockify(
      ConsoleWarningTypesEnum.ignore,
      'constructor',
      { className }
    )
  }
}

function getClassName( lineExportInterface: string ): string {
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

  return ''
}

function handleClassNameErrors( classNameWithErrors: string ): string {
  if ( classNameWithErrors === '' ) {
    addConsoleWarningMockify(
      ConsoleWarningTypesEnum.ignore,
      'class-name-empty',
      {}
    )
  }

  return classNameWithErrors
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

function handleKeysErrors(
  className: string,
  keysWithPotentialErrors: string[]
): string[] {
  if ( keysWithPotentialErrors.length === 0 ) {
    addConsoleWarningMockify(
      ConsoleWarningTypesEnum.ignore,
      'keys-empty',
      { className }
    )
  }

  if ( keysWithPotentialErrors.includes( '[key' ) ) {
    addConsoleWarningMockify(
      ConsoleWarningTypesEnum.ignore,
      'generic-keys',
      { className }
    )

    return keysWithPotentialErrors
      ?.filter(
        ( key: string ) => key !== '[key'
      )
  }

  return keysWithPotentialErrors;
}