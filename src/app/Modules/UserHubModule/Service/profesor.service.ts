import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  constructor(private http: HttpClient) { }
  private urlEndPoint: string = 'http://localhost/tesis_ug_back_end/home';
  
  recuperarRegistro(criteria : any) : Observable<any> {
    criteria.action = "crearJuego";
    return this.http.post<any>(this.urlEndPoint,criteria);
  }


}
