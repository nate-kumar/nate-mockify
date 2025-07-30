import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";
import MoveFileModel from "../../../models/move-file.model";

export default function moveFile( moveMockFileConfig: MoveFileModel ): Rule {
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