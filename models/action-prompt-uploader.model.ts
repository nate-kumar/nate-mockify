import { SuggestedActionsButton } from "../components/neo-suggested-actions-prompt/suggested-actions-button.model";

export interface NeoActionPromptUploaderModel {
  title?: string;
  uploadUrl: string;
  supportedFileTypes?: string[];
  maxFileSizeMb: number;
  instructionText: string;
  orInstructionText: string;
  successMethod?: ( event ) => void;
  errorMethod?: ( event ) => void;
  buttons?: SuggestedActionsButton[];
}
