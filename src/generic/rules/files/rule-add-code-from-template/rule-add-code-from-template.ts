import { chain, Rule, SchematicContext, Tree } from "@angular-devkit/schematics";
import AddCodeFromTemplateModel from "../../../models/add-code-from-template.model";
import AddToFileModel from "../../../models/add-to-file.model";
import GenerateTemplateModel from "../../../models/generate-template.model";
import appendToFile from "../rule-append-to-file/rule-append-to-file";
import deleteFile from "../rule-delete-file/rule-delete-file";
import generateTemplateFile from "../rule-generate-template-file/rule-generate-template-file";

export default function addCodeFromTemplate( _options: AddCodeFromTemplateModel ): Rule {
  return (
    _tree: Tree,
    _context: SchematicContext
  ) => {
    const {
      variables,
      templatePathSegment,
      fileToUpdatePathSegment
    } = { ..._options }

    const {
      numLineBreaksBefore = 0,
      numLineBreaksAfter = 0
    } = { ..._options?.formatting }

    const generateTemplateConfig: GenerateTemplateModel =
      {
        templateUrl: `./templates/${ templatePathSegment }`,
        variables
      }
    const appendToFileConfig: AddToFileModel =
      {
        fileToCopyContentFromUrl: `${ templatePathSegment }`,
        fileToAppendContentToUrl: `${ fileToUpdatePathSegment }`,
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

    return chain( rules );
  };
}