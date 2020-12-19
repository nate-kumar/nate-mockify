import { Rule, SchematicContext } from "@angular-devkit/schematics";
import { Tree } from "@angular-devkit/schematics/src/tree/interface";

export function deleteFile( fileToDeleteUrl: string ): Rule {
  return (
    tree: Tree,
    _context: SchematicContext
  ) => {
    tree.delete( fileToDeleteUrl );
    return tree;
  };
}

module.exports;