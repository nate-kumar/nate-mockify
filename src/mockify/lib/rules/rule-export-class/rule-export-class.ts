import { Rule, SchematicContext } from "@angular-devkit/schematics";
import { Tree } from "@angular-devkit/schematics/src/tree/interface";
// import { appendToFile } from "../rule-append-to-file/rule-append-to-file";
// import { deleteFile } from "../rule-delete-file/rule-delete-file";
// import { generateTemplateFile } from "../rule-generate-template-file/rule-generate-template-file";
import { addCodeFromTemplate } from './../rule-add-code-from-template/rule-add-code-from-template'
import { AddCodeFromTemplateModel } from '../../../models/add-code-from-template.model';

export function buildExportClassRule( 
  mockUrl: string,
  className: string
): Rule {
  return (
    tree: Tree,
    _context: SchematicContext
  ) => {
    const addCodeFromTemplateConfig: AddCodeFromTemplateModel =
      {
        variables: {
          className
        },
        templatePathSegment: 'export-class-segment.ts.template',
        fileToUpdatePathSegment: mockUrl,
        formatting: {
          numLineBreaksBefore: 1,
          numLineBreaksAfter: 1
        }
      }

    tree

    return addCodeFromTemplate( addCodeFromTemplateConfig )
  }
}

module.exports;