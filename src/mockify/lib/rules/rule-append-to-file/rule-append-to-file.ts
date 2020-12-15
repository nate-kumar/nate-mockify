import { AddToFileModel } from '../../../models/add-to-file.model';
import { Rule, SchematicContext, UpdateRecorder } from "@angular-devkit/schematics";
import { Tree } from "@angular-devkit/schematics/src/tree/interface";

export function appendToFile( _options: AddToFileModel ): Rule {
  return (
    tree: Tree,
    _context: SchematicContext
  ) => {
    const { fileToUpdateUrl } = _options

    const content: string = `\r\n\r\n${ tree.read( 'key-segment.ts.template' )?.toString() }` || '';

    const lastChar: number = tree.read( fileToUpdateUrl )?.length || 0;
    const updateRecorder: UpdateRecorder = tree.beginUpdate(fileToUpdateUrl);
    updateRecorder.insertRight( lastChar, content )
    tree.commitUpdate( updateRecorder );

    return tree;
  };
}

module.exports;