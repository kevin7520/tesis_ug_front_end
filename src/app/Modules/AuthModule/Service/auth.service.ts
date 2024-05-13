import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  private urlEndPoint: string = 'http://localhost/api-SeriusGame/auth';
  login(criteria : any) : Observable<any> {
    return this.http.post<any>(this.urlEndPoint,criteria);
  }
}
