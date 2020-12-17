import { Rule, SchematicContext } from "@angular-devkit/schematics";
import { Tree } from "@angular-devkit/schematics/src/tree/interface";
import { MoveFileModel } from "../../../models/file-manipulation.model";

export function moveFile( moveMockFileConfig: MoveFileModel ): Rule {
  return (
    tree: Tree,
    _context: SchematicContext
  ) => {
    const {
      fileSegmentUrl,
      sourceFolderUrl,
      targetFolderUrl
    } = moveMockFileConfig

    tree.rename(
      `${ sourceFolderUrl }${ fileSegmentUrl }`,
      `${ targetFolderUrl }${ fileSegmentUrl }`
    )

    return tree
  }
}

module.exports;