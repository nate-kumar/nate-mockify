import { Schema } from './schema.d';
import { GenerateTemplateModel } from './models/generate-template.model';
import { AddToFileModel } from './models/add-to-file.model';
import { SegmentsModel } from './models/segments.model';
import { apply, Rule, SchematicContext, template, Tree, url, mergeWith, chain, Source, UpdateRecorder } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { TemplateVariablesModel, ClassNameAndKeysModel } from './models/template-variables.model';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function mockify( _options: Schema ): Rule {
  return (
    tree: Tree,
    _context: SchematicContext
  ) => {

    _options.modelUrl = './models/neo-date.model.ts'

    const modelFileBuffer: Buffer = tree.read( _options.modelUrl ) || Buffer.from( '' );

    const {
      className,
      keys
    } = getClassNameAndKeys( modelFileBuffer );

    let variableSets: TemplateVariablesModel[] = [];

    for ( const key of keys ) {
      const variableSet: TemplateVariablesModel =
        {
          key,
          modelName: className
        }
      
      variableSets.push( variableSet );
    }

    let rulesFullModelFile: Rule[] = [];

    for ( const variables of variableSets ) {
      const rulesSingleModelKey: Rule[] =
        [
          generateNewFileContent(
            {
              templateUrl: './files',
              variables
            }
          ),
          appendToFile(
            {
              fileToUpdateUrl: './src/mockify/mocks/key-segment.ts.template'
            }
          ),
          deleteFile( 'key-segment.ts.template' )
        ]

      rulesFullModelFile.push( ...rulesSingleModelKey )
    }
    
    return chain( rulesFullModelFile )( tree, _context )
  };
}

export function generateNewFileContent( _options: GenerateTemplateModel ): Rule {
  return (
    tree: Tree,
    _context: SchematicContext
  ) => {
    const {
      templateUrl,
      variables
    } = _options;

    const sourceTemplates: Source = url( templateUrl );

    const sourceParametrizedTemplates: Source =
      apply(
        sourceTemplates,
        [
          template(
            {
              ...variables,
              ...strings
            }
          )
        ]
      )

    return mergeWith( sourceParametrizedTemplates )(tree, _context);
  }
}

export function appendToFile( _options: AddToFileModel ): Rule {
  return (
    tree: Tree,
    _context: SchematicContext
  ) => {
    const { fileToUpdateUrl } = _options

    const content: string = `\r\n\r\n${ tree.read( 'key-segment.ts.template' )?.toString() }` || '';

    const lastChar: number = tree.read( fileToUpdateUrl )?.length || 0;
    const updateRecorder: UpdateRecorder = tree.beginUpdate(fileToUpdateUrl);
    updateRecorder.insertRight( lastChar, content )
    tree.commitUpdate( updateRecorder );

    return tree;
  };
}

export function deleteFile( fileToDeleteUrl: string ): Rule {
  return (
    tree: Tree,
    _context: SchematicContext
  ) => {
    tree.delete( fileToDeleteUrl );
    return tree;
  };
}

function getClassNameAndKeys( modelFileBuffer: Buffer ) {
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

  // For each key, generate a withBlock, e.g. 
  const keys: string[] = getModelKeys( linesOfKeys );

  const classNameAndKeys: ClassNameAndKeysModel =
    {
      className,
      keys
    }

  return classNameAndKeys;
}

function getSegmentsFromModelLines( linesOfCodeArray: string[] ) {
  const indexExportInterface: number =
    linesOfCodeArray
      ?.findIndex(
        ( line: string ) => line.includes( 'interface ' )
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
  const patternOpenCurlyBrace: string = '{'

  const indexPatternInterface: number = lineExportInterface?.indexOf( patternInterface )
  const indexStartOfClassName: number = indexPatternInterface + patternInterface.length;
  const indexEndOfClassName: number = lineExportInterface?.indexOf( patternOpenCurlyBrace ) - patternOpenCurlyBrace.length;

  if ( indexPatternInterface > 0 ) {
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