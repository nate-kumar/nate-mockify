import { Rule, SchematicContext } from "@angular-devkit/schematics";
import { Tree, UpdateRecorder } from "@angular-devkit/schematics/src/tree/interface";
import { insertImport } from '@schematics/angular/utility/ast-utils'
import { InsertChange } from '@schematics/angular/utility/change';
import { dasherize } from "@angular-devkit/core/src/utils/strings";
import * as ts from 'typescript';

export default function buildAddImportsRule(
  mockUrl: string,
  className: string,
  _keys: string[],
  modelsFolderUrl: string
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
    const mockSourceFile: ts.SourceFile | undefined = program.getSourceFile( mockUrl );

    if ( mockSourceFile ) {
      const importModelUrl: string = 
        getModelUrlFromModelClassName(
          className,
          modelsFolderUrl
        )
      const importChange: InsertChange =
        insertImport( 
          mockSourceFile,
          mockUrl,
          className,
          importModelUrl
        ) as InsertChange;

      if ( importChange ) {
        const recorder: UpdateRecorder = tree.beginUpdate( mockUrl );

        recorder.insertLeft(
          importChange.pos,
          importChange.toAdd
        );

        tree.commitUpdate(recorder);
      }
    }
    
    return tree
  };
}

function getModelUrlFromModelClassName(
  className: string,
  modelsFolderUrl: string,
): string {
  return `${ modelsFolderUrl }${ dasherize( className.replace( 'Model', '' ) ) }.model.ts`;
}

module.exports;