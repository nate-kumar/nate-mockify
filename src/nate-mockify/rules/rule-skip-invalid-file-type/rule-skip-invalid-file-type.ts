import { SchematicContext } from "@angular-devkit/schematics";
import { Tree } from "@angular-devkit/schematics/src/tree/interface";
import addConsoleWarningMockify from "../../utils/console-warnings/console-warnings";
import ConsoleWarningTypesEnum from "../../../generic/enums/console-warning-types.enum";

export default function skipInvalidFileType( fileSegmentUrl: string ) {
  return (
    tree: Tree,
    _context: SchematicContext
  ) => {
    addConsoleWarningMockify(
      ConsoleWarningTypesEnum.invalid,
      'invalid-file-type',
      { fileName: fileSegmentUrl }
    )

    return tree;
  }
}