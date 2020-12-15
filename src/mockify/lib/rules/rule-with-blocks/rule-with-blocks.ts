import { deleteFile } from '../../utils/delete-file/delete-file';
import { appendToFile } from '../../utils/append-to-file/append-to-file';
import { Rule, SchematicContext, chain } from "@angular-devkit/schematics";
import { Tree } from "@angular-devkit/schematics/src/tree/interface";
import { TemplateVariablesModel } from "../../../models/template-variables.model";
import { generateTemplateFile } from '../../utils/generate-template-file/generate-template-file'

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
          modelName: className
        }
      
      variableSets.push( variableSet );
    }

    let rulesFullModelFile: Rule[] = [];

    for ( const variables of variableSets ) {
      const rulesSingleModelKey: Rule[] =
        [
          generateTemplateFile(
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

    // TODO remove
    tree
    
    return chain( rulesFullModelFile );
  };
}

module.exports;