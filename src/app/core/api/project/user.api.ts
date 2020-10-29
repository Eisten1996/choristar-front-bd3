import { RestApi } from '../_base/rest.api';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserApi extends RestApi {
  getAllUsers(): Observable<any> {
    return this.get('/users');
  }

  getUser(id: string): Observable<any> {
    return this.get(`/user/${id}`);
  }

  getUserDni(dni: string): Observable<any> {
    return this.get(`/user?dni=${dni}`);
  }

  logingAdmin(email: string, password: string): Observable<any> {
    return this.get(`/user/login/${email}/${password}`);
  }

  createUser(user: User): Observable<any> {
    return this.post('/user', user);
  }

  updateUser(user: User): Observable<any> {
    return this.put(`/user/${user.id}`, user);
  }

  deleteUser(id: string): Observable<any> {
    return this.delete(`/user/${id}`);
  }

}
