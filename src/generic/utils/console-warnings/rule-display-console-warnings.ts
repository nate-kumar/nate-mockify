import ConsoleWarningTypesModel from './../../models/console-warning-types.model'; // Corrected import path
import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics"; // Corrected Tree import
import ConsoleWarningSegmentModel from "../../models/console-warning-segment.model";
import { getConsoleWarningsObject } from "./console-warnings";
import ConsoleWarningTypesEnum from '../../enums/console-warning-types.enum';

export default function displayConsoleWarnings(): Rule {
  return (
    _tree: Tree, // Renamed unused tree parameter
    _context: SchematicContext
  ): void => { // Changed return type to void
    const consoleWarningsObject: ConsoleWarningTypesModel = getConsoleWarningsObject();
    const consoleWarningsCombinedString: string = formatConsoleWarningSegments( consoleWarningsObject );

    console.warn( consoleWarningsCombinedString );
    // No longer returns tree
  }
}

function formatConsoleWarningSegments( consoleWarningsObject: ConsoleWarningTypesModel ): string {
  const consoleWarningsSegmentsArray: ConsoleWarningSegmentModel[][] = [];

  const consoleWarningsOrder: ConsoleWarningTypesEnum[] = [
    ConsoleWarningTypesEnum.error,
    ConsoleWarningTypesEnum.invalid,
    ConsoleWarningTypesEnum.ignore,
    ConsoleWarningTypesEnum.rename,
    ConsoleWarningTypesEnum.create,
  ]

  consoleWarningsOrder
    .forEach(
      ( consoleWarningType: ConsoleWarningTypesEnum ) => 
        consoleWarningsSegmentsArray
          .push( 
            ...consoleWarningsObject[ consoleWarningType ] || []
          )
    )

  const consoleWarningsCombinedString: string =
    consoleWarningsSegmentsArray
      ?.map(
        ( consoleWarningSegments: ConsoleWarningSegmentModel[] ) =>
          consoleWarningSegments
            ?.map(
              ( consoleWarningSegment: ConsoleWarningSegmentModel ) => consoleWarningSegment.colour + consoleWarningSegment.text
            )
      )
      ?.map(
        ( consoleWarningSegmentsConcatenated: string[] ) => consoleWarningSegmentsConcatenated.join( ' ' )
      )
      ?.join( '\r\n' );

  const consoleWarningsCombinedStringWithNewLine = '\r\n' + consoleWarningsCombinedString

  return consoleWarningsCombinedStringWithNewLine;
}
