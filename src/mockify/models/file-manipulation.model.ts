export interface MoveFileModel {
  fileSegmentUrl: string;
  sourceFolderUrl: string;
  targetFolderUrl: string;
}

export interface MockifyModel {
  fileSegmentUrl: string;
  modelsFolderUrl: string;
  mocksFolderUrl: string;
  overwriteExisting: boolean;
}