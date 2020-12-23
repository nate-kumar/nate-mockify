import { Rule, SchematicContext } from "@angular-devkit/schematics";
import { Tree } from "@angular-devkit/schematics/src/tree/interface";

export default function incrementProgressBar( progressBar: any ): Rule {
  return (
    tree: Tree,
    _context: SchematicContext
  ) => {
    progressBar.increment();
    return tree
  }
}

module.exports;