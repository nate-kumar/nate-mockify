import { strings } from "@angular-devkit/core";
import { Rule, SchematicContext, Source, mergeWith, apply, url, template } from "@angular-devkit/schematics";
import { Tree } from "@angular-devkit/schematics/src/tree/interface";
import { GenerateTemplateModel } from "../../models/generate-template.model";

export function generateTemplateFile( _options: GenerateTemplateModel ): Rule {
  return (
    tree: Tree,
    context: SchematicContext
  ) => {
    const {
      templateUrl,
      variables
    } = _options;

    const sourceTemplates: Source = url( templateUrl );

    const sourceParametrizedTemplates: Source =
      apply(
        sourceTemplates,
        [
          template(
            {
              ...variables,
              ...strings
            }
          )
        ]
      )

    return mergeWith( sourceParametrizedTemplates )( tree, context );
  }
}

module.exports;