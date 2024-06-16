import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  constructor(private http: HttpClient) { }
  private urlEndPoint: string = 'http://localhost/tesis_ug_back_end/home';
  
  crearJuego(criteria : any) : Observable<any> {
    criteria.action = "crearJuego";
    return this.http.post<any>(this.urlEndPoint,criteria);
  }

  guardarRequerimiento(criteria : any) : Observable<any> {
    const criteriaRequest  = {
      action: "guardarRequerimientos",
      requisitos: []
    }
    return this.http.post<any>(this.urlEndPoint,criteriaRequest);
  }

  obtenerRequerimiento() : Observable<any> {
    const criteriaRequest  = {
      action: "obtenerRequerimientos",
    }
    return this.http.post<any>(this.urlEndPoint,criteriaRequest);
  }


}
