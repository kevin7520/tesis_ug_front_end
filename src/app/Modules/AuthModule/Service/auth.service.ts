import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  private urlEndPoint: string = 'http://localhost/tesis_ug_back_end/auth';
  
  login(criteria : any) : Observable<any> {
    return this.http.post<any>(this.urlEndPoint,criteria);
  }

  crearCuenta(criteria : any) : Observable<any> {
    return this.http.put<any>(this.urlEndPoint,criteria);
  }
}
