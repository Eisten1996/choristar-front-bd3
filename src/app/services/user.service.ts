import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../interfaces/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private api = 'https://choristar-backend.herokuapp.com/api';

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers(){
    const path = `${this.api}/users`;
    return this.http.get<Profile[]>(path);
  }

  getUserDni(dni: string){
    const path = `${this.api}/user?dni=${dni}`;
    return this.http.get<Profile>(path);
  }

  getUser(id: string){
    const path = `${this.api}/user/${id}`;
    return this.http.get<Profile>(path);
  }

  logingAdmin(email: string, password: string){
    const path = `${this.api}/user/login/${email}/${password}`;
    return this.http.get<Profile>(path);
  }

  createUser(profile: Profile){
    const path = `${this.api}/user`;
    return this.http.post(path, profile)
  }

  updateUser(profile: Profile){
    const path = `${this.api}/user/${profile.id}`
    return this.http.put<Profile>(path, profile);
  }

  deleteUser(id: string){
    const path = `${this.api}/user/${id}`;
    return this.http.delete(path);
  }
}
