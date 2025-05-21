import { strings } from "@angular-devkit/core";
import { Rule, SchematicContext, Source, mergeWith, apply, url, template, Tree } from "@angular-devkit/schematics";
import GenerateTemplateModel from "../../../models/generate-template.model";

export default function generateTemplateFile( _options: GenerateTemplateModel ): Rule {
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