import { normalize } from '@angular-devkit/core/src/virtual-fs/path';
const path = require( 'path' )

export default function getRelativePath(
  fileToGenerateRelativePathTo: string,
  currentFile: string = __dirname,
) {
  const relativePath: string =
    path
      .relative(
        currentFile,
        fileToGenerateRelativePathTo
      )
  const normalisedPath = normalize( relativePath )
  console.log( normalisedPath )
}