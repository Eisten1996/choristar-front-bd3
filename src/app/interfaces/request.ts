import { TypeRequest } from './type-request';

export interface Request {
  dateRequest: string;
  id?: string;
  stateRequest: string;
  typeRequest: TypeRequest;
  user: string;
}
