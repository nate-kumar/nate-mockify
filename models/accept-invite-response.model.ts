import { NeoUserInviteDetailsModel } from './accept-invite-details.model';

export interface NeoInviteResponseObject {
  status: number;
  body?: NeoUserInviteDetailsModel;
}
