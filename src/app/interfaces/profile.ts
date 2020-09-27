import { Service } from './service';
import { StateUser } from './state-user';
import { typeUser } from './type-user';

export interface Profile {
  dateBirth: string;
  dni: string;
  email: string;
  firstName: string;
  id?: string;
  lastName: string;
  password: string;
  services?: Service;
  stateUser: StateUser;
  typeUser: typeUser;
}
