import { Rule, SchematicContext, chain } from "@angular-devkit/schematics";
import { Tree } from "@angular-devkit/schematics/src/tree/interface";
import { TemplateVariablesModel } from "../../../models/template-variables.model";
import { AddCodeFromTemplateModel } from '../../../models/add-code-from-template.model';
import { addCodeFromTemplate } from '../rule-add-code-from-template/rule-add-code-from-template';

export function buildWithBlocksRule(
  className: string,
  keys: string[]
): Rule {
  return (
    tree: Tree,
    _context: SchematicContext
  ) => {

    let variableSets: TemplateVariablesModel[] = [];

    for ( const key of keys ) {
      const variableSet: TemplateVariablesModel =
        {
          key,
          className
        }
      
      variableSets.push( variableSet );
    }

    let rulesAllWithBlocks: Rule[] = [];

    for ( const variables of variableSets ) {
      const addCodeFromTemplateConfig: AddCodeFromTemplateModel =
        {
          variables: {
            className: variables?.className,
            key: variables?.key
          },
          templatePathSegment: 'key-segment.ts.template',
          fileToUpdatePathSegment: 'key-segment.ts.template',
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