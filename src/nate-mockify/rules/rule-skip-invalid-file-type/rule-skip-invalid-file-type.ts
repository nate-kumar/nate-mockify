import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";
import addConsoleWarningMockify from "../../utils/console-warnings/console-warnings";
import ConsoleWarningTypesEnum from "../../../generic/enums/console-warning-types.enum";

export default function skipInvalidFileType( fileSegmentUrl: string ): Rule { // Explicitly Rule
  return (
    _tree: Tree, // tree parameter is not used
    _context: SchematicContext
  ): void => { // Inner function returns void
    addConsoleWarningMockify(
      ConsoleWarningTypesEnum.invalid,
      'invalid-file-type',
      { fileName: fileSegmentUrl }
    );
    // No longer returns tree
  }
}