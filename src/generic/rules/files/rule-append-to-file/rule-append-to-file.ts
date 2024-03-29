import { Rule, SchematicContext, UpdateRecorder } from "@angular-devkit/schematics";
import { Tree } from "@angular-devkit/schematics/src/tree/interface";
import AddToFileModel from "../../../models/add-to-file.model";

export default function appendToFile( _options: AddToFileModel ): Rule {
  return (
    tree: Tree,
    _context: SchematicContext
  ) => {
    const { 
      fileToCopyContentFromUrl,
      fileToAppendContentToUrl,
      numLineBreaksBefore,
      numLineBreaksAfter
    } = _options

    const lineBreaksBefore = `${ '\r\n'.repeat( numLineBreaksBefore || 0 ) }`;
    const fileLines = `${ tree.read( fileToCopyContentFromUrl )?.toString() }`;
    const lineBreaksAfter = `${ '\r\n'.repeat( numLineBreaksAfter || 0 ) }`;

    const content: string = `${ lineBreaksBefore }${ fileLines }${ lineBreaksAfter }` || '';

    const lastChar: number = tree.read( fileToAppendContentToUrl )?.length || 0;
    const updateRecorder: UpdateRecorder = tree.beginUpdate(fileToAppendContentToUrl);
    updateRecorder.insertRight( lastChar, content )
    tree.commitUpdate( updateRecorder );

    return tree;
  };
}

module.exports;