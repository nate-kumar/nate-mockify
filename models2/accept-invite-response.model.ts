import { AcceptInviteDetailsModel } from './accept-invite-details.model';

export interface AcceptInviteResponseModel {
  status: number;
  body?: AcceptInviteDetailsModel;
}
