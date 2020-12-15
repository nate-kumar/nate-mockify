import { chain, Rule, SchematicContext } from "@angular-devkit/schematics";
import { Tree } from "@angular-devkit/schematics/src/tree/interface";
import { AddCodeFromTemplateModel } from "../../../models/add-code-from-template.model";
import { AddToFileModel } from "../../../models/add-to-file.model";
import { GenerateTemplateModel } from "../../../models/generate-template.model";
import { appendToFile } from "../rule-append-to-file/rule-append-to-file";
import { deleteFile } from "../rule-delete-file/rule-delete-file";
import { generateTemplateFile } from "../rule-generate-template-file/rule-generate-template-file";

export function addCodeFromTemplate( _options: AddCodeFromTemplateModel ): Rule {
  return (
    tree: Tree,
    _context: SchematicContext
  ) => {

    const {
      variables,
      templatePathSegment,
      fileToUpdatePathSegment
    } = _options

    const {
      numLineBreaksBefore,
      numLineBreaksAfter
    } = _options?.formatting || {}

    const generateTemplateConfig: GenerateTemplateModel =
      {
        templateUrl: `./files/${ templatePathSegment }`,
        variables
      }
    const appendToFileConfig: AddToFileModel =
      {
        fileToCopyContentFromUrl: `${ templatePathSegment }`,
        fileToAppendContentToUrl: `./src/mockify/mocks/${ fileToUpdatePathSegment }`,
        numLineBreaksBefore,
        numLineBreaksAfter
      }
    const deleteFileConfig: string = `${ templatePathSegment }`

    const rules: Rule[] =
      [
        generateTemplateFile( generateTemplateConfig ),
        appendToFile( appendToFileConfig ),
        deleteFile( deleteFileConfig )
      ]

    tree

    return chain( rules );
  };
}

module.exports;