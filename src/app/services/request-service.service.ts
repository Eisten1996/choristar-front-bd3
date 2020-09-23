import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Request } from '../interfaces/request';

@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {
  private api = 'https://choristar-backend.herokuapp.com/api';

  constructor(
    private http: HttpClient
  ) { }

  getAllRequests(){
    const path = `${this.api}/requests`;
    return this.http.get<Request[]>(path);
  }

  createRequest(request: Request, dni: string){
    const path = `${this.api}/request/${dni}`;
    return this.http.post(path, request)
  }
}
