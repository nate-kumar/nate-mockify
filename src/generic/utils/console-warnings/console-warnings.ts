import ConsoleWarningTypesEnum from '../../enums/console-warning-types.enum';
import ConsoleWarningSegmentModel from '../../models/console-warning-segment.model';
import ConsoleWarningTypesModel from '../../models/console-warning-types.model';

const consoleWarningObject: ConsoleWarningTypesModel = {};

export default function addConsoleWarning(
  type: ConsoleWarningTypesEnum,
  warningSegments: ConsoleWarningSegmentModel[]
): void {
  consoleWarningObject?.[ type ]?.push( warningSegments ) || ( consoleWarningObject[ type ] = [ warningSegments ] );
}

export function getConsoleWarningsObject(): ConsoleWarningTypesModel {
  return consoleWarningObject;
}

module.exports;