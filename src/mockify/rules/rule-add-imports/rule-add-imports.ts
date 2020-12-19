import { Rule, SchematicContext } from "@angular-devkit/schematics";
import { Tree, UpdateRecorder } from "@angular-devkit/schematics/src/tree/interface";
import { insertImport } from '@schematics/angular/utility/ast-utils'
import { InsertChange } from '@schematics/angular/utility/change';
import * as ts from 'typescript';

export function buildAddImportsRule(
  mockUrl: string,
  _className: string,
  _keys: string[],
  _modelsFolderUrl: string
): Rule {
  return (
    tree: Tree,
    _context: SchematicContext
  ) => {
    const program: ts.Program = 
      ts.createProgram(
        [ mockUrl ],
        {}
      );
    const mockSourceFile: ts.SourceFile = program.getSourceFile( mockUrl );
    const importChange: InsertChange =
      insertImport( 
        mockSourceFile,
        mockUrl,
        'DateModel',
        './models/date.model.ts'
      ) as InsertChange;

    if ( importChange ) {
      const recorder: UpdateRecorder = tree.beginUpdate( mockUrl );

      recorder.insertLeft(
        importChange.pos,
        importChange.toAdd
      );

      tree.commitUpdate(recorder);
    }

    return tree
  };
}

module.exports;