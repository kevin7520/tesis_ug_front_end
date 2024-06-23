import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../../Service/alumno.service';
import { Router } from '@angular/router';
import { ProfesorService } from '../../../Service/profesor.service';

@Component({
  selector: 'app-juegos-creados',
  templateUrl: './juegos-creados.component.html',
  styleUrls: ['./juegos-creados.component.scss']
})
export class JuegosCreadosComponent implements OnInit {

  constructor(private _profesprService : ProfesorService, private _router: Router) { }
  juegos: any[] = [];
  juegoSeleccionado: any = this.reiniciarDatos();

  requerimientos : any[] = [];
  displayedColumns: string[] = ['position', 'id_juego', 'tipo', 'fecha_creacion', 'fecha_finalizacion', 'estado', "acctions"];
  displayedColumns2: string[] = ['position', 'req', 'typeReq', 'ReqPlus', 'pts'];
  view_req: boolean = false;
  ngOnInit() {
    this.buscarJuegos();
  }

   buscarJuegos() {
    const dataLocal = JSON.parse(localStorage.getItem('persona')!);
    const criteria = {
      id: dataLocal.id
    }
    this._profesprService.obtenerJuegosProfesor(criteria).subscribe(Response => {
      if(Response.msg == 'OK') {
        this.juegos = [...Response.result];
      }
    })
  }

  elegirJuego(id: number) {
    const juego = this.juegos.find(data => data.id_juego == id);
    const jsonTemp = JSON.parse(juego.json);
    const juegoJson = jsonTemp[0].requerimientos.map((data:any)=> {
      return {
        requerimiento: data.requerimiento,
        retroalimentacion: data.retroalimentacion,
        opcionRequerimiento: (data.opcionRequerimiento == 'NFA') ? true : false,
        puntosAdicionales: "qqqq",
        requerimientoCompleto: "no"
      }
    });
    this.juegoSeleccionado = {
      id_juego: juego.id_juego,
      tipo_req: juego.opcionJuego,
      fecha_creacion: juego.fecha_creacion,
      fecha_finalizacion: juego.fecha_finalizacion,
      estado: "A",
      requerimientos: [...juegoJson]
    }
    debugger;

    this.view_req = true;
  }

  regresarJuego() {
    this.view_req = false;
    this.juegoSeleccionado = this.reiniciarDatos();
  }

  reiniciarDatos() : any {
    return {
      id_juego: 0,
      tipo_req: "",
      fecha_creacion: "",
      fecha_finalizacion: "",
      estado: "",
      requerimientos : []
    }
  }

  cerrarViewReq() {
    this.view_req = false;
  }

  crearJuego() {
    this._router.navigateByUrl('/home/crear-juego');
  }

}
