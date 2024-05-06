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
    //const urlLogin : string = this.urlEndPoint+'buscar_persona';
    //let token = localStorage.getItem('token');
    // const header = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': 'bearer '+token
    // })
    return this.http.post<any>(this.urlEndPoint,criteria);
  }
}
