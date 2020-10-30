import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Claim } from '../../interfaces/claim';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClaimServiceService {
  private api = 'https://choristar-backend.herokuapp.com/api';

  constructor(
    private http: HttpClient
  ) {
  }

  getAllClaims() {
    const path = `${this.api}/claims`;
    return this.http.get<Claim[]>(path);
  }

  createClaim(claim: Claim, dni: string) {
    const path = `${this.api}/claim/${dni}`;
    return this.http.post(path, claim);
  }

  deleteClaim(id: string): Observable<any> {
    const path = `${this.api}/claim/${id}`;
    return this.http.delete(path);
  }
}
