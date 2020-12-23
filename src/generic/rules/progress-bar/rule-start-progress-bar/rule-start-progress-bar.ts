import { Rule, SchematicContext } from "@angular-devkit/schematics";
import { Tree } from "@angular-devkit/schematics/src/tree/interface";

export default function startProgressBar(
  progressBar: any,
  folderUrl: string
): Rule {
  return (
    tree: Tree,
    _context: SchematicContext
  ) => {
    const numFiles: number =
      tree
        .getDir( folderUrl )?.subfiles?.length;

    progressBar
      .start(
        numFiles,
        0
      );

    return tree
  }
}

module.exports;