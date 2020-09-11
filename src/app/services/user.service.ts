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

  getAllProfiles(){
    const path = `${this.api}/users`;
    return this.http.get<Profile[]>(path);
  }

  createProfile(profile: Profile){
    const path = `${this.api}/users`;
    return this.http.post(path, profile)
  }
}
