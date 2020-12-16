import { Schema } from './schema.d';
import { Rule, SchematicContext, Tree, chain } from '@angular-devkit/schematics';
import { buildWithBlocksRule } from './lib/rules/rule-with-blocks/rule-with-blocks'
import { buildExportClassRule } from './lib/rules/rule-export-class/rule-export-class'
import { buildDefaultDataRule } from './lib/rules/rule-default-data/rule-default-data'
import { buildModelFunctionRule } from './lib/rules/rule-model-function/rule-model-function'
import { buildCloseCurlyBraceRule } from './lib/rules/rule-close-curly-brace/rule-close-curly-brace'
import { getClassNameAndKeys } from './lib/utils/get-class-name-and-keys/get-class-name-and-keys'
import { Path } from '@angular-devkit/core';


export function mockify( _options: Schema ): Rule {
  return (
    tree: Tree,
    context: SchematicContext
  ) => {
    const modelsFolderUrl: string = _options.modelsFolderUrl || './models';

    let rulesFullModelFolder: Rule[] = []

    tree
      .getDir( modelsFolderUrl )
      .visit( 
        ( modelFileUrl: Path ) => {
          if ( modelFileUrl.includes( '.model.ts' ) ) {
            const rulesFullModelFile: Rule = mockifyFile( modelFileUrl )
            rulesFullModelFolder.push( rulesFullModelFile )
          }
        }
      )

    return chain( rulesFullModelFolder )( tree, context )
  }
}

export function mockifyFile( modelUrl: string ): Rule {
  return (
    tree: Tree,
    context: SchematicContext
  ) => {
    const mockUrl: string = getMockUrl( modelUrl );
    
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

    createBlankFile(
      tree,
      mockUrl
    )

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

function getMockUrl( modelUrl: string ) {
  const mockUrl: string =
    modelUrl
      .replace( 'models', 'mocks' )
      .replace( '.ts', '.mock.ts' );
  
  return mockUrl
}

function createBlankFile(
  tree: Tree,
  mockUrl: string
) {
  if ( tree.exists( mockUrl ) ) {
    tree.delete( mockUrl )
  }
  tree.create( mockUrl, '' )
}
