import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Claim } from '../interfaces/claim';

@Injectable({
  providedIn: 'root'
})
export class ClaimServiceService {
  private api = 'https://choristar-backend.herokuapp.com/api';

  constructor(
    private http: HttpClient
  ) { }

  getAllClaims(){
    const path = `${this.api}/claim`;
    return this.http.get<Claim[]>(path);
  }

  createClaim(claim: Claim, dni: string){
    const path = `${this.api}/claim/${dni}`;
    return this.http.post(path, claim)
  }
}
