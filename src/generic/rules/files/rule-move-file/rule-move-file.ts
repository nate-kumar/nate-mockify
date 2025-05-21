import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";
import MoveFileModel from "../../../models/move-file.model";

export default function moveFile( moveMockFileConfig: MoveFileModel ): Rule {
  return (
    tree: Tree,
    _context: SchematicContext
  ): void => { // Changed return type to void
    const {
      fileSegmentUrl,
      sourceFolderUrl,
      targetFolderUrl
    } = moveMockFileConfig;

    const oldPath = `${sourceFolderUrl}${fileSegmentUrl}`;
    const newPath = `${targetFolderUrl}${fileSegmentUrl}`;

    if (tree.exists(oldPath)) {
      // Ensure the target directory exists if tree.rename doesn't create it.
      // However, tree.rename typically handles moving files across directories.
      // If newPath's directory doesn't exist, rename might fail or might create it,
      // depending on the underlying Tree implementation. For safety, one might ensure
      // the directory for newPath exists, but that's an advanced scenario not in the original code.
      tree.rename(oldPath, newPath);
    } else {
      _context.logger.warn(`File to move '${oldPath}' does not exist. Skipping move.`);
    }
  }
}