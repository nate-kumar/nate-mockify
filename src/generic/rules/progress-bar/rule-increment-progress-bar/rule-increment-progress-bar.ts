import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";

export default function incrementProgressBar( progressBar: any ): Rule {
  return (
    // tree parameter is not used, but kept for Rule signature consistency
    _tree: Tree, 
    _context: SchematicContext
  ): void => { // Changed return type to void
    progressBar.increment();
  }
}