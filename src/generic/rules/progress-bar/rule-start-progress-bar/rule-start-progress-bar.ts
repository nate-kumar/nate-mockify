import { Rule, SchematicContext, Tree, DirEntry } from "@angular-devkit/schematics";

export default function startProgressBar(
  progressBar: any,
  folderUrl: string
): Rule {
  return (
    tree: Tree,
    _context: SchematicContext
  ): void => { // Changed return type to void
    console.log( '' );

    let numFiles: number = 0;
    try {
      const dirEntry: DirEntry = tree.getDir(folderUrl);
      numFiles = dirEntry.subfiles.length;
    } catch (e) {
      _context.logger.warn(`Could not get directory information for '${folderUrl}'. Starting progress bar with 0 files.`);
      // Optionally, re-throw if this is a critical error: throw e;
    }
    
    progressBar.start(numFiles, 0);
  }
}