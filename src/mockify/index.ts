import { Schema } from './schema.d';
import { Rule, SchematicContext, Tree, chain } from '@angular-devkit/schematics';
import { buildWithBlocksRule } from './lib/rules/rule-with-blocks/rule-with-blocks'
import { buildExportClassRule } from './lib/rules/rule-export-class/rule-export-class'
import { getClassNameAndKeys } from './lib/utils/get-class-name-and-keys/get-class-name-and-keys'


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

    const ruleExportClass: Rule = buildExportClassRule( className );
    // const ruleDefaultData: Rule = buildDefaultDataRule();
    const ruleWithBlocks: Rule = buildWithBlocksRule( className, keys );
    // const ruleModelFunction: Rule = buildModelFunctionRule();
    // const ruleCloseCurlyBrace: Rule = buildCloseCurlyBraceRule();

    const rulesFullModelFile: Rule[] =
      [
        ruleExportClass,
        // ruleDefaultData,
        ruleWithBlocks,
        // ruleModelFunction,
        // ruleCloseCurlyBrace
      ]

    return chain( rulesFullModelFile )( tree, _context )
  }
}
