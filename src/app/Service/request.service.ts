import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from '../Models/request';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment'; 
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private baseUrl = environment.BASE_URL;


  constructor(private httpClient: HttpClient) {
  }

  GetRequest(): Observable<Request[]> {
    return this.httpClient.get<Request[]>(`${this.baseUrl}`);
  }

  AddRequest(request: Request): Observable<Request> {
    return this.httpClient.post<Request>(`${this.baseUrl}`, request);
  }
}

