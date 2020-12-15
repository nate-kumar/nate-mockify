import { AddToFileModel } from '../../../models/add-to-file.model';
import { Rule, SchematicContext, UpdateRecorder } from "@angular-devkit/schematics";
import { Tree } from "@angular-devkit/schematics/src/tree/interface";

export function appendToFile( _options: AddToFileModel ): Rule {
  return (
    tree: Tree,
    _context: SchematicContext
  ) => {
    const { 
      fileToReadUrl,
      fileToUpdateUrl,
      numLineBreaksBefore,
      numLineBreaksAfter
    } = _options

    const lineBreaksBefore = `${ '\r\n'.repeat( numLineBreaksBefore || 0 ) }`;
    const fileLines = `${ tree.read( fileToReadUrl )?.toString() }`;
    const lineBreaksAfter = `${ '\r\n'.repeat( numLineBreaksAfter || 0 ) }`;

    const content: string = `${ lineBreaksBefore }${ fileLines }${ lineBreaksAfter }` || '';
    console.log( content )

    const lastChar: number = tree.read( fileToUpdateUrl )?.length || 0;
    const updateRecorder: UpdateRecorder = tree.beginUpdate(fileToUpdateUrl);
    updateRecorder.insertRight( lastChar, content )
    tree.commitUpdate( updateRecorder );

    return tree;
  };
}

module.exports;