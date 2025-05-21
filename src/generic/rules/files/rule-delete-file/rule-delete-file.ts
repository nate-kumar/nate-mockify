import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";

export default function deleteFile( fileToDeleteUrl: string ): Rule {
  return (
    tree: Tree,
    _context: SchematicContext
  ): void => { // Changed return type to void
    if (tree.exists(fileToDeleteUrl)) {
      tree.delete( fileToDeleteUrl );
    } else {
      _context.logger.warn(`File to delete '${fileToDeleteUrl}' does not exist. Skipping deletion.`);
    }
  };
}