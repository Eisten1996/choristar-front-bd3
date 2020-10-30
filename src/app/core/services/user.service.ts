import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserApi } from '../api/project/user.api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private userApi: UserApi
  ) {
  }

  getAllUsers(): Observable<any> {
    return this.userApi.getAllUsers();
  }

  getUserDni(dni: string): Observable<any> {
    return this.userApi.getUserDni(dni);
  }

  getUser(id: string): Observable<any> {
    return this.userApi.getUser(id);
  }

  logingAdmin(email: string, password: string): Observable<any> {
    return this.userApi.logingAdmin(email, password);
  }

  createUser(user: User): Observable<any> {
    return this.userApi.createUser(user);
  }

  updateUser(user: User): Observable<any> {
    return this.userApi.updateUser(user);
  }

  deleteUser(id: string): Observable<any> {
    return this.userApi.deleteUser(id);
  }
}
