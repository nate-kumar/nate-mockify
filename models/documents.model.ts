import { DocumentVisibilityModel } from "./documents-visibility.model";

export interface DocumentsModel {
  id: string;
  documentType: string;
  documentSubType: string;
  name: string;
  originalFileName: string;
  mediaType: string;
  fileSize: number;
  documentUri: string;
  category: string;
  addedBy: string;
  addedDate: string;
  validFrom: string;
  expiryDate: string;
  requiresAcceptance: boolean;
  acceptedBy: string;
  acceptedDate: string;
  isLatestVersion: boolean;
  status: string;
  description: string;
  tags: string[];
  visibility: DocumentVisibilityModel;
  actions: string[];
}

