import { Rule, SchematicContext, chain } from "@angular-devkit/schematics";
import { Tree } from "@angular-devkit/schematics/src/tree/interface";
import { AddCodeFromTemplateModel } from '../../../models/add-code-from-template.model';
import { addCodeFromTemplate } from '../rule-add-code-from-template/rule-add-code-from-template';

export function buildWithBlocksRule(
  mockUrl: string,
  className: string,
  keys: string[]
): Rule {
  return (
    tree: Tree,
    _context: SchematicContext
  ) => {

    let rulesAllWithBlocks: Rule[] = [];

    for ( const key of keys ) {
      const addCodeFromTemplateConfig: AddCodeFromTemplateModel =
        {
          variables: {
            className,
            key
          },
          templatePathSegment: 'key-segment.ts.template',
          fileToUpdatePathSegment: mockUrl,
          formatting: {
            numLineBreaksBefore: 1,
            numLineBreaksAfter: 1
          }
        }

      rulesAllWithBlocks.push( addCodeFromTemplate( addCodeFromTemplateConfig ) )
    }

    // TODO remove
    tree
    
    return chain( rulesAllWithBlocks );
  };
}

module.exports;