import { Schema } from './schema.d';
import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function mockify( _options: Schema ): Rule {
  return (
    tree: Tree,
    _context: SchematicContext
  ) => {
    console.log( {tree} )

    return tree;
  };
}
