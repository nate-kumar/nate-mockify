import * as fs from 'fs'

export async function getFilesFromDirectory( folderUrl: string ) {
  const filePathSegments: string[] = await fs.promises.readdir( folderUrl )
  const modelUrls: string[] = 
    filePathSegments
      .map(
        ( filePathSegment: string ) => `${ folderUrl }/${ filePathSegment }`
      )

  return modelUrls;
}

export function getFilesFromDirectorySync( folderUrl: string ) {
  const filePathSegments: string[] = fs.readdirSync( folderUrl );
  const modelUrls: string[] =
    filePathSegments
      ?.map(
        ( filePathSegment: string ) => `${ folderUrl }/${ filePathSegment }`
      )

  return modelUrls;
}