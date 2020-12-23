import { Rule, SchematicContext } from "@angular-devkit/schematics";
import { Tree } from "@angular-devkit/schematics/src/tree/interface";
import ConsoleWarningSegmentModel from "../../models/console-warning-segment.model";
import { getConsoleWarningsArray } from "./console-warnings";

export default function displayConsoleWarnings(): Rule {
  return (
    tree: Tree,
    _context: SchematicContext
  ) => {
    const consoleWarningsSegmentsArray: ConsoleWarningSegmentModel[][] = getConsoleWarningsArray();
    const consoleWarningsCombinedString: string =
      consoleWarningsSegmentsArray
        ?.map(
          ( consoleWarningSegments: ConsoleWarningSegmentModel[] ) =>
            consoleWarningSegments
              ?.map(
                ( consoleWarningSegment: ConsoleWarningSegmentModel ) => consoleWarningSegment.colour + consoleWarningSegment.text
              )
        )
        ?.sort(
          (
            consoleWarningSegment1,
            consoleWarningSegment2
          ) => {
            const type1: string = consoleWarningSegment1[ 0 ];
            const type2: string = consoleWarningSegment2[ 0 ];

            if ( type1 < type2 ) {
              return -1;
            }
            if ( type1 > type2 ) {
              return 1;
            }

            return 0;
          }
        )
        ?.map(
          ( consoleWarningSegmentsConcatenated: string[] ) => consoleWarningSegmentsConcatenated.join( ' ' )
        )
        ?.join( '\r\n' );

    console.warn( consoleWarningsCombinedString );
    return tree;
  }
}

module.exports;