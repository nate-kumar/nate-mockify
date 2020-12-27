import { SchematicContext } from "@angular-devkit/schematics";
import { Tree } from "@angular-devkit/schematics/src/tree/interface";
import ConsoleWarningTypesEnum from "../../../enums/console-warning-types.enum";
import addConsoleWarning from "../../../utils/console-warnings/console-warnings";

export default function skipInvalidFileType( fileSegmentUrl: string ) {
  return (
    tree: Tree,
    _context: SchematicContext
  ) => {
    addConsoleWarning(
      ConsoleWarningTypesEnum.invalid,
      'invalid-file-type',
      { fileName: fileSegmentUrl }
    )

    return tree;
  }
}