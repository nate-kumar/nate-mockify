import { deleteFile } from '../rule-delete-file/rule-delete-file';
import { appendToFile } from '../rule-append-to-file/rule-append-to-file';
import { Rule, SchematicContext, chain } from "@angular-devkit/schematics";
import { Tree } from "@angular-devkit/schematics/src/tree/interface";
import { TemplateVariablesModel } from "../../../models/template-variables.model";
import { generateTemplateFile } from '../rule-generate-template-file/rule-generate-template-file'

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

    let rulesFullModelFile: Rule[] = [];

    for ( const variables of variableSets ) {
      const rulesSingleModelKey: Rule[] =
        [
          generateTemplateFile(
            {
              templateUrl: './files/key-segment.ts.template',
              variables
            }
          ),
          appendToFile(
            {
              fileToReadUrl: 'key-segment.ts.template',
              fileToUpdateUrl: './src/mockify/mocks/key-segment.ts.template',
              numLineBreaksBefore: 1,
              numLineBreaksAfter: 1
            }
          ),
          deleteFile( 'key-segment.ts.template' )
        ]

      rulesFullModelFile.push( ...rulesSingleModelKey )
    }

    // TODO remove
    tree
    
    return chain( rulesFullModelFile );
  };
}

module.exports;