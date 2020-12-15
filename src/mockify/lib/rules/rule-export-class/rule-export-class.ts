import { TemplateVariablesModel } from './../../../models/template-variables.model';
import { chain, Rule, SchematicContext } from "@angular-devkit/schematics";
import { Tree } from "@angular-devkit/schematics/src/tree/interface";
import { appendToFile } from "../rule-append-to-file/rule-append-to-file";
import { deleteFile } from "../rule-delete-file/rule-delete-file";
import { generateTemplateFile } from "../rule-generate-template-file/rule-generate-template-file";

export function buildExportClassRule( className: string ): Rule {
  return (
    tree: Tree,
    _context: SchematicContext
  ) => {
    const variables: TemplateVariablesModel = 
      {
        className
      };

    const rules: Rule[] = [
      generateTemplateFile(
        {
          templateUrl: './files/export-class-segment.ts.template',
          variables
        }
      ),
      appendToFile(
        {
          fileToReadUrl: 'export-class-segment.ts.template',
          fileToUpdateUrl: './src/mockify/mocks/key-segment.ts.template',
          numLineBreaksBefore: 1,
          numLineBreaksAfter: 2
        }
      ),
      deleteFile( 'export-class-segment.ts.template' )
    ]

    tree

    return chain( rules )
  }
}

module.exports;