import { Rule, SchematicContext } from "@angular-devkit/schematics";
import { Tree } from "@angular-devkit/schematics/src/tree/interface";

export default function stopProgressBar( progressBar: any ): Rule {
  return (
    tree: Tree,
    _context: SchematicContext
  ) => {
    progressBar.stop();
    return tree
  }
}

module.exports;