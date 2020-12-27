import { Rule, SchematicContext } from "@angular-devkit/schematics";
import { Tree } from "@angular-devkit/schematics/src/tree/interface";
import { Schema } from "./schema";

export function componentify( _options: Schema ): Rule {
  return (
    tree: Tree,
    _context: SchematicContext
  ) => {
    return tree;
  }
}