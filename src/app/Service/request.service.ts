import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from '../Models/request';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

   BASE_URL = 'http://localhost:5223/api/Requests';

  constructor(private httpClient: HttpClient) {
  }

  GetRequest(): Observable<Request[]> {
    return this.httpClient.get<Request[]>(`${this.BASE_URL}`);
  }

  AddRequest(request: Request): Observable<Request> {
    return this.httpClient.post<Request>(`${this.BASE_URL}`, request);
  }
}

