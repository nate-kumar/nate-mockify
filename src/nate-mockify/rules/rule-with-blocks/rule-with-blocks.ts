import { Rule, SchematicContext, chain, Tree } from "@angular-devkit/schematics";
import AddCodeFromTemplateModel from '../../../generic/models/add-code-from-template.model';
import addCodeFromTemplate from "../../../generic/rules/files/rule-add-code-from-template/rule-add-code-from-template";

export default function buildWithBlocksRule(
  mockUrl: string,
  className: string,
  keys: string[]
): Rule {
  return (
    _tree: Tree,
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
    
    return chain( rulesAllWithBlocks );
  };
}
