import { Component, DoCheck, ElementRef, OnInit } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { DatosJuego, Requerimiento } from '../../Model/requerimientos.model';
import { Router } from '@angular/router';
import { ProfesorService } from '../../../Service/profesor.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent implements OnInit {

  
  
  validarCrearNivel : boolean = false;
  verificarCreacion : boolean = false;
  retornoMsg : string = "";

  codigo_juego = 0;

  datosJuego : DatosJuego = {
    fechaFinalizacion: this.sumarDias(new Date(), 7),
    niveles: [
     {
      id_nivel: 1+'nivel',
      nivel: 1,
      opcionJuego: "J1",
      requerimientos : []
     }
    ]
  }

  //requrimientoData : Requerimiento = this.llenarDatoRequerimiento();

  agregarRequerimiento: boolean = true;
  viewModalResponse: boolean = false;
  menuOpen: boolean | undefined;
  
  constructor(private buttonRef: ElementRef, private _router : Router, private _profesorService: ProfesorService) {
    
   }

  ngOnInit() {
    
    
  }

  sumarDias(fecha: Date, dias: number): Date {
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
  }
  
  finalizarRequerimiento(){
    this.validarCrearNivel = true;
  }

  crearNuevoNivel() {
    this.validarCrearNivel = false;
    const indice = this.datosJuego.niveles.length-1;
    const id_ultimo : number = this.datosJuego.niveles[indice].nivel+1;
    const criteria =  {
      id_nivel: id_ultimo+'nivel',
      nivel: id_ultimo,
      opcionJuego: "J1",
      requerimientos : []
     }
    this.datosJuego.niveles.push(criteria);
  }

  // crearNuevoRequerimiento(indiceNivel : number) {
  //   const criteria = {
  //     requerimiento: "",
  //     retroalimentacion: "",
  //     opcionRequerimiento: "NFN",
  //     puntosAdicionales: 100
  //   }
  //   this.datosJuego.niveles[indiceNivel].requerimientos.push(criteria);
  // }

  

  guardarRequerimiento(data : any,indiceNivel : number) {
    this.datosJuego.niveles[indiceNivel].requerimientos.push(data);
  }

  // llenarDatoRequerimiento() : Requerimiento {
  //   const data : Requerimiento = {
  //     requerimiento: "",
  //     retroalimentacion: "",
  //     opcionRequerimiento: "NFN",
  //     puntosAdicionales: 100
  //   }
  //   return data;
  // }

  eliminarRequerimiento(indiceNivel : number, indiceRequerimiento : number) {
    //debugger;
    this.datosJuego.niveles[indiceNivel].requerimientos = this.datosJuego.niveles[indiceNivel].requerimientos.filter((_, i) => i !== indiceRequerimiento);
    ///this.datosJuego = { ...this.datosJuego, niveles: [...this.datosJuego.niveles] };
  }  

  finalizarCreacion() {
    const dataLocal = JSON.parse(localStorage.getItem('persona')!);
    // const criteria = {
    //   "idUsuario": dataLocal.id,
    //   "usuario": dataLocal.user
    // }
    const criteria = {
      id_profesor: dataLocal.id,
      fechaCreacion: new Date(),
      fechaFinilizacion: this.datosJuego.fechaFinalizacion,
      json: JSON.stringify(this.datosJuego.niveles)
    }

    this._profesorService.crearJuego(criteria).subscribe(dataResponse => {
      if(dataResponse.msg == 'OK'){
        this.verificarCreacion = true;
        this.codigo_juego = dataResponse.result.id_juego;
        this.retornoMsg = "Los niveles del juego se creación de forma exitosa. El código del juego es "+this.codigo_juego+" te servira para que tus alumnos encuentre tu juego."
      }
      else{
        this.verificarCreacion = false;
        this.retornoMsg = "La creación del juego no fue exitosa. Por favor, inténtelo nuevamente más tarde."
      }
      this.viewModalResponse = true;
    })
  }

  verJuegoshome(){
    this._router.navigateByUrl('/home/perfil');
  }

}
