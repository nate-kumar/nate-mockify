export default interface AddToFileModel {
  fileToCopyContentFromUrl: string;
  fileToAppendContentToUrl: string;
  numLineBreaksBefore?: number;
  numLineBreaksAfter?: number;
}