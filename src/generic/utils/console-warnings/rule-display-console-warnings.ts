import { Rule, SchematicContext } from "@angular-devkit/schematics";
import { Tree } from "@angular-devkit/schematics/src/tree/interface";
import { getConsoleWarningsArray } from "./console-warnings";

export default function displayConsoleWarnings(): Rule {
  return (
    tree: Tree,
    _context: SchematicContext
  ) => {
    const consoleWarningsArray = getConsoleWarningsArray();
    const consoleWarningsWithNewLines =
      consoleWarningsArray
        .map(
          ( consoleWarningItem: string[] ) => consoleWarningItem.join( ' ' )
        )
        .join( '\r\n' );

    console.warn( consoleWarningsWithNewLines );
    return tree;
  }
}

module.exports;