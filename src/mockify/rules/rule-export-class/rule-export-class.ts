import { Rule, SchematicContext } from "@angular-devkit/schematics";
import { Tree } from "@angular-devkit/schematics/src/tree/interface";
import { AddCodeFromTemplateModel } from '../../../generic/models/add-code-from-template.model';
import { addCodeFromTemplate } from "../../../generic/rules/rule-add-code-from-template/rule-add-code-from-template";

export function buildExportClassRule( 
  mockUrl: string,
  className: string
): Rule {
  return (
    _tree: Tree,
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
          numLineBreaksAfter: 2
        }
      }

    return addCodeFromTemplate( addCodeFromTemplateConfig )
  }
}

module.exports;