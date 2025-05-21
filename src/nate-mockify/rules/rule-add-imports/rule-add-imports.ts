import { Rule, SchematicContext, Tree, UpdateRecorder } from "@angular-devkit/schematics";
import { insertImport } from '@schematics/angular/utility/ast-utils';
import { InsertChange } from '@schematics/angular/utility/change';
import { strings } from "@angular-devkit/core"; // Changed to import 'strings'
import * as ts from 'typescript';

export default function buildAddImportsRule(
  mockUrl: string,
  className: string,
  _keys: string[], // _keys is not used, consider removing if not planned for future use
  modelsFolderUrl: string
): Rule {
  return (
    tree: Tree,
    _context: SchematicContext
  ): void => { // Changed return type to void
    if (!tree.exists(mockUrl)) {
      _context.logger.error(`File ${mockUrl} does not exist. Cannot add imports.`);
      return;
    }

    const fileContent = tree.readText(mockUrl);
    const mockSourceFile = ts.createSourceFile(
      mockUrl,
      fileContent,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TS
    );

    if (mockSourceFile) {
      const importModelUrl: string = 
        getModelUrlFromModelClassName(
          className,
          modelsFolderUrl,
          _context // Pass context for logging if needed
        );
      
      // Ensure importModelUrl is valid before proceeding
      if (!importModelUrl) return; // Error logged in getModelUrlFromModelClassName

      const importChange: InsertChange =
        insertImport( 
          mockSourceFile,
          mockUrl, // filePath for the SourceFile
          className, // symbolName
          importModelUrl // modulePath
        ) as InsertChange;

      if (importChange && importChange.toAdd) { // Check importChange.toAdd as well
        const recorder: UpdateRecorder = tree.beginUpdate(mockUrl);
        recorder.insertLeft(importChange.pos, importChange.toAdd);
        tree.commitUpdate(recorder);
      }
    }
  };
}

function getModelUrlFromModelClassName(
  className: string,
  modelsFolderUrl: string,
  _context?: SchematicContext // Optional context for logging
): string {
  // Assuming modelsFolderUrl is normalized (e.g., ends with '/') as per index.ts refactor
  // Example: modelsFolderUrl = 'src/app/models/'
  // className = 'MyExampleModel' -> 'my-example'
  const modelName = className.replace(/Model$/, ''); // Remove 'Model' suffix
  if (!modelName) {
    _context?.logger.error(`Could not derive model name from className: ${className}`);
    return '';
  }
  return `${modelsFolderUrl}${strings.dasherize(modelName)}.model.ts`;
}