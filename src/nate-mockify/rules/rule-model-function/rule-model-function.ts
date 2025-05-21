import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";
import AddCodeFromTemplateModel from "../../../generic/models/add-code-from-template.model";
import addCodeFromTemplate from "../../../generic/rules/files/rule-add-code-from-template/rule-add-code-from-template";

export default function buildModelFunctionRule(
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
        templatePathSegment: 'model-function-segment.ts.template',
        fileToUpdatePathSegment: mockUrl,
        formatting: {
          numLineBreaksBefore: 2,
          numLineBreaksAfter: 1
        }
      }
    
    return addCodeFromTemplate( addCodeFromTemplateConfig );
  };
}