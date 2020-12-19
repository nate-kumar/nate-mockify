import { MockifyModel } from './models/mockify.model';
import { Schema } from './schema.d';
import { Rule, SchematicContext, Tree, chain } from '@angular-devkit/schematics';
import { Path } from '@angular-devkit/core';
import { buildWithBlocksRule } from './lib/rules/rule-with-blocks/rule-with-blocks'
import { buildExportClassRule } from './lib/rules/rule-export-class/rule-export-class'
import { buildDefaultDataRule } from './lib/rules/rule-default-data/rule-default-data'
import { buildModelFunctionRule } from './lib/rules/rule-model-function/rule-model-function'
import { buildCloseCurlyBraceRule } from './lib/rules/rule-close-curly-brace/rule-close-curly-brace'
import { getClassNameAndKeys } from './lib/utils/get-class-name-and-keys/get-class-name-and-keys'
import { consoleWarning } from '../generic/utils/console-warnings/console-warnings';
import { MoveFileModel } from '../generic/models/move-file.model';
import { moveFile } from '../generic/rules/rule-move-file/rule-move-file';


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

            const rulesMoveMockFile: Rule = moveFile( moveMockFileConfig )
            rulesFullModelFolder.push( rulesMoveMockFile )
          }

          if ( isModelFile( fileSegmentUrl ) ) {
            const mockifyConfig: MockifyModel =
              {
                fileSegmentUrl,
                modelsFolderUrl,
                mocksFolderUrl,
                overwriteExisting
              }

            const rulesMockifyFile: Rule = mockifyFile( mockifyConfig )
            rulesFullModelFolder.push( rulesMockifyFile )
          }
        }
      )

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

    const mockFileSegmentUrl = fileSegmentUrl.replace( '.ts', '.mock.ts' )
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
        consoleWarning(
          'SKIPPED',
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

    const rulesFullModelFile: Rule[] =
      [
        ruleExportClass,
        ruleDefaultData,
        ruleWithBlocks,
        ruleModelFunction,
        ruleCloseCurlyBrace
      ]

    return chain( rulesFullModelFile )( tree, context )
  }
}
