// model-function-segment.ts.template

import { Rule, SchematicContext } from "@angular-devkit/schematics";
import { Tree } from "@angular-devkit/schematics/src/tree/interface";
import { AddCodeFromTemplateModel } from "../../../models/add-code-from-template.model";
import { addCodeFromTemplate } from "../rule-add-code-from-template/rule-add-code-from-template";

export function buildModelFunctionRule( className: string ): Rule {
  return (
    tree: Tree,
    _context: SchematicContext
  ) => {
    const addCodeFromTemplateConfig: AddCodeFromTemplateModel =
      {
        variables: {
          className
        },
        templatePathSegment: 'model-function-segment.ts.template',
        fileToUpdatePathSegment: 'key-segment.ts.template',
        formatting: {
          numLineBreaksBefore: 1,
          numLineBreaksAfter: 1
        }
      }

    // TODO remove
    tree
    
    return addCodeFromTemplate( addCodeFromTemplateConfig );
  };
}

module.exports;