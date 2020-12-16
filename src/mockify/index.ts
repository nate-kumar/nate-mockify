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
    _context: SchematicContext
  ) => {
    const modelsFolderUrl: string = _options.modelsFolderUrl || './models';

    let rulesFullModelFolder: Rule[] = []

    tree
      .getDir( modelsFolderUrl )
      .visit( 
        ( modelFileUrl: Path ) => {
          const rulesFullModelFile: Rule = mockifyFile( modelFileUrl )
          rulesFullModelFolder.push( rulesFullModelFile )
        }
      )

    return chain( rulesFullModelFolder )( tree, _context )
  }
}

export function mockifyFile( modelUrl: string ): Rule {
  return (
    tree: Tree,
    _context: SchematicContext
  ) => {
    const mockUrl: string =
      modelUrl
        .replace( 'models', 'mocks' )
        .replace( '.ts', '.mock.ts' );
    
    const modelFileText: string = tree.read( modelUrl )?.toString() || '';
    const {
      className,
      keys
    } = getClassNameAndKeys( modelFileText );

    if (
      className
      && keys?.length > 0
    ) {
      if ( tree.exists( mockUrl ) ) {
        tree.delete( mockUrl )
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

      return chain( rulesFullModelFile )( tree, _context )
    }
    else {
      return tree
    }

  }
}
