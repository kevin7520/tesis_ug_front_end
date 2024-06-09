import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http: HttpClient) { }
  private urlEndPoint: string = 'http://localhost/tesis_ug_back_end/home';
  
  recuperarJuego(criteria : any) : Observable<any> {
    criteria.action = "obtenerJuego";
    return this.http.post<any>(this.urlEndPoint,criteria);
  }

  recuperJuegosPublicos(){
    const criteria = {
      "action": "obtenerJuegoPublicos"
    }
    return this.http.post<any>(this.urlEndPoint,criteria);
  }

}
