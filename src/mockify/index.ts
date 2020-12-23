import MockifyModel from './models/mockify.model';
import { Schema } from './schema.d';
import { Rule, SchematicContext, Tree, chain } from '@angular-devkit/schematics';
import { Path } from '@angular-devkit/core';
import getClassNameAndKeys from './utils/get-class-name-and-keys/get-class-name-and-keys'
import addConsoleWarning from '../generic/utils/console-warnings/console-warnings';
import MoveFileModel from '../generic/models/move-file.model';
import buildWithBlocksRule from './rules/rule-with-blocks/rule-with-blocks'
import buildExportClassRule from './rules/rule-export-class/rule-export-class'
import buildDefaultDataRule from './rules/rule-default-data/rule-default-data'
import buildModelFunctionRule from './rules/rule-model-function/rule-model-function'
import buildCloseCurlyBraceRule from './rules/rule-close-curly-brace/rule-close-curly-brace'
import moveFile from '../generic/rules/files/rule-move-file/rule-move-file';
import startProgressBar from '../generic/rules/progress-bar/rule-start-progress-bar/rule-start-progress-bar';
import incrementProgressBar from '../generic/rules/progress-bar/rule-increment-progress-bar/rule-increment-progress-bar';
import stopProgressBar from '../generic/rules/progress-bar/rule-stop-progress-bar/rule-stop-progress-bar';
import createProgressBar from '../generic/rules/progress-bar/create-progress-bar/create-progress-bar';
import displayConsoleWarnings from '../generic/utils/console-warnings/rule-display-console-warnings';
// import { buildAddImportsRule } from './rules/rule-add-imports/rule-add-imports';


export function mockify( _options: Schema ): Rule {
  return (
    tree: Tree,
    context: SchematicContext
  ) => {
    // TODO change to ./src/app/models/ if appropriate
    const modelsFolderUrl: string = _options.modelsFolderUrl || './models/';
    const mocksFolderUrl: string = _options.mocksFolderUrl || './models/mocks/'
    const overwriteExisting: boolean = _options.overwriteExisting || false;
    const rulesFullModelFolder: Rule[] = []

    const isModelFile: ( modelFileUrl: string ) => boolean = ( modelFileUrl: string ) => modelFileUrl.includes( '.model.ts' )
    const isMockFile: ( modelFileUrl: string ) => boolean = ( modelFileUrl: string ) => modelFileUrl.includes( '.mock.ts' )

    const progressBar: any = createProgressBar();
    const ruleStartProgressBar: Rule =
      startProgressBar(
        progressBar,
        modelsFolderUrl
      )
    rulesFullModelFolder.push( ruleStartProgressBar );

    tree
      .getDir( modelsFolderUrl )
      .visit( 
        ( fileUrl: Path ) => {
          const fileSegmentUrl: string = '.'.concat( fileUrl ).replace( modelsFolderUrl, '' )

          if ( isMockFile( fileUrl ) ) {
            const moveMockFileConfig: MoveFileModel =
              {
                fileSegmentUrl,
                sourceFolderUrl: modelsFolderUrl,
                targetFolderUrl: mocksFolderUrl
              }

            const ruleMoveMockFile: Rule = moveFile( moveMockFileConfig )
            rulesFullModelFolder.push( ruleMoveMockFile )
          }

          else if ( isModelFile( fileSegmentUrl ) ) {
            const mockifyConfig: MockifyModel =
              {
                fileSegmentUrl,
                modelsFolderUrl,
                mocksFolderUrl,
                overwriteExisting
              }

            const ruleMockifyFile: Rule = mockifyFile( mockifyConfig )
            rulesFullModelFolder.push( ruleMockifyFile )
          }

          else {
            const ruleSkipUnhandledFileType: Rule = skipInvalidFileType( fileSegmentUrl );
            rulesFullModelFolder.push( ruleSkipUnhandledFileType )
          }

          const ruleIncrementProgressBar: Rule = incrementProgressBar( progressBar );
          rulesFullModelFolder.push( ruleIncrementProgressBar );
        }
      )

    const ruleStopProgressBar: Rule = stopProgressBar( progressBar )
    rulesFullModelFolder.push( ruleStopProgressBar )

    const ruleDisplayConsoleWarnings: Rule = displayConsoleWarnings();
    rulesFullModelFolder.push( ruleDisplayConsoleWarnings )

    return chain( rulesFullModelFolder )( tree, context )
  }
}

function mockifyFile( mockifyConfig: MockifyModel ): Rule {
  return (
    tree: Tree,
    context: SchematicContext
  ) => {
    const {
      fileSegmentUrl,
      modelsFolderUrl,
      mocksFolderUrl,
      overwriteExisting      
    } = mockifyConfig;

    const mockFileSegmentUrl: string = fileSegmentUrl.replace( '.ts', '.mock.ts' )
    const modelUrl: string = `${ modelsFolderUrl }${ fileSegmentUrl }`;
    const mockUrl: string = `${ mocksFolderUrl }${ mockFileSegmentUrl }`;

    const modelFileText: string = tree.read( modelUrl )?.toString() || '';

    const {
      className,
      keys
    } = getClassNameAndKeys( modelFileText );

    if (
      !className
      || !keys
    ) {
      return tree
    }

    if ( tree.exists( mockUrl ) ) {
      if ( !overwriteExisting ) {
        addConsoleWarning(
          'IGNORE',
          'not-overwritten',
          { className }
        )
        return tree
      }
      else {
        tree.delete( mockUrl )
      }
    }
    tree.create( mockUrl, '' )

    const ruleExportClass: Rule = buildExportClassRule( mockUrl, className );
    const ruleDefaultData: Rule = buildDefaultDataRule( mockUrl, className, keys );
    const ruleWithBlocks: Rule = buildWithBlocksRule( mockUrl, className, keys );
    const ruleModelFunction: Rule = buildModelFunctionRule( mockUrl, className );
    const ruleCloseCurlyBrace: Rule = buildCloseCurlyBraceRule( mockUrl );
    // const ruleAddImports: Rule = buildAddImportsRule( mockUrl, className, keys, modelsFolderUrl )

    const rulesFullModelFile: Rule[] =
      [
        ruleExportClass,
        ruleDefaultData,
        ruleWithBlocks,
        ruleModelFunction,
        ruleCloseCurlyBrace,
        // ruleAddImports
      ]

    return chain( rulesFullModelFile )( tree, context )
  }
}

function skipInvalidFileType( fileSegmentUrl: string ) {
  return (
    tree: Tree,
    _context: SchematicContext
  ) => {
    addConsoleWarning(
      'INVALID',
      'invalid-file-type',
      { fileName: fileSegmentUrl }
    )

    return tree;
  }
}