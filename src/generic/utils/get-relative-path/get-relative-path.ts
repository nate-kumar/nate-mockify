import { normalize } from '@angular-devkit/core'; // Corrected import for normalize
import * as path from 'path'; // Changed to ES6 import style

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