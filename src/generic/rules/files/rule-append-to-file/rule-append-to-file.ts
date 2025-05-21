import { Rule, SchematicContext, Tree, UpdateRecorder } from "@angular-devkit/schematics";
import AddToFileModel from "../../../models/add-to-file.model";

export default function appendToFile( _options: AddToFileModel ): Rule {
  return (
    tree: Tree,
    _context: SchematicContext
  ): void => { // Changed return type to void
    const { 
      fileToCopyContentFromUrl,
      fileToAppendContentToUrl,
      numLineBreaksBefore,
      numLineBreaksAfter
    } = _options;

    let fileLines = '';
    if (tree.exists(fileToCopyContentFromUrl)) {
      fileLines = tree.readText(fileToCopyContentFromUrl);
    } else {
      // Or handle as an error: _context.logger.error(`File to copy from '${fileToCopyContentFromUrl}' does not exist.`); return;
      _context.logger.warn(`File to copy from '${fileToCopyContentFromUrl}' does not exist. Appending empty content.`);
    }

    const lineBreaksBefore = '\r\n'.repeat( numLineBreaksBefore || 0 );
    const lineBreaksAfter = '\r\n'.repeat( numLineBreaksAfter || 0 );

    const content: string = `${lineBreaksBefore}${fileLines}${lineBreaksAfter}`;

    if (!tree.exists(fileToAppendContentToUrl)) {
      _context.logger.error(`File to append to '${fileToAppendContentToUrl}' does not exist.`);
      return; // Exit if target file doesn't exist
    }

    const currentContentBuffer = tree.read(fileToAppendContentToUrl);
    const lastChar: number = currentContentBuffer ? currentContentBuffer.length : 0;
    
    const updateRecorder: UpdateRecorder = tree.beginUpdate(fileToAppendContentToUrl);
    updateRecorder.insertRight( lastChar, content );
    tree.commitUpdate( updateRecorder );
  };
}