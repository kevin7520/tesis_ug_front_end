import { Component, DoCheck, ElementRef, OnInit } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { DatosJuego, Requerimiento } from '../../Model/requerimientos.model';
import { Router } from '@angular/router';
import { ProfesorService } from '../../../Service/profesor.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent implements OnInit {

  
  
  validarCrearNivel : boolean = false;
  verificarCreacion : boolean = false;
  modalAgradecimiento = false;
  retornoMsg : string = "";


  codigo_juego = 0;

  requerimientosCargados : any[] = [];

  datosJuego : DatosJuego = {
    fechaFinalizacion: this.sumarDias(new Date(), 7),
    privacidad: 'S',
    niveles: [
     {
      id_nivel: 1+'nivel',
      nivel: 1,
      opcionJuego: "J1",
      requerimientos : []
     }
    ]
  }

  options_Visibilidad : any[] = [
    { name: 'Privado', code: 'N'},
    { name: 'Público', code: 'S'}
  ];

  //requrimientoData : Requerimiento = this.llenarDatoRequerimiento();

  agregarRequerimiento: boolean = true;
  viewModalResponse: boolean = false;
  menuOpen: boolean | undefined;
  verModalGuardarRequerimientos = false;
  
  constructor(private buttonRef: ElementRef, private _router : Router, private _profesorService: ProfesorService, private _snackBar: MatSnackBar, private _translateService: TranslateService) {
    
   }

  ngOnInit() {
    this.cargarRequerimientos();
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
      opcionJuego: "no",
      requerimientos : []
     }
    this.datosJuego.niveles.push(criteria);
  }
  

  guardarRequerimiento(data : any,indiceNivel : number) {
    this.datosJuego.niveles[indiceNivel].requerimientos.push(data);
  }

  eliminarRequerimiento(indiceNivel : number, indiceRequerimiento : number) {
    this.datosJuego.niveles[indiceNivel].requerimientos = this.datosJuego.niveles[indiceNivel].requerimientos.filter((_, i) => i !== indiceRequerimiento);
  }  

  finalizarCreacion() {
    const dataLocal = JSON.parse(localStorage.getItem('persona')!);
    const criteria = {
      id_profesor: dataLocal.id,
      privacidad: this.datosJuego.privacidad,
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
    });
  }

  verJuegoshome(){
    this.viewModalResponse = false;
    this.verModalGuardarRequerimientos = true;
  }

  cerrarGuardarRequerimientos() {
    this.verModalGuardarRequerimientos = false;
  }

  guardarRequerimientos() {
    const criteria : any[] = [];
    this.datosJuego.niveles.forEach(datoJuego=> {
      const dataFilter = datoJuego.requerimientos.filter(data => data.requerimientoBase == 'No');
      if(dataFilter.length > 0) {
        criteria.push(...dataFilter.map(data=>{
          let TipoReq = 0;
          switch(data.opcionRequerimiento){
            case 'NFA':
              TipoReq = 1;
              break;
            case 'NFN':
              TipoReq = 2;
              break;
            case 'FA':
              TipoReq = 3;
              break;
            case 'FN':
              TipoReq = 4;
              break;
              case 'RF':
              TipoReq = 5;
              break;
            case 'FRNFN':
              TipoReq = 6;
              break;
          }
          return {
            requerimiento: data.requerimiento,
            retroalimentacion: data.retroalimentacion,
            idTipo: TipoReq
          }
        }));
      }
      
    });
    this._profesorService.guardarRequerimiento(criteria).subscribe(data=>{
      if(data.msg == 'OK') {
        this.modalAgradecimiento = true;
        this.cerrarGuardarRequerimientos();
      }
      else{
        this.openSnackBar(this._translateService.instant('Error al guardar requerimientos'),'custom-snackbar_fallido');
        this.cerrarGuardarRequerimientos();
      }
    });
    //this.cerrarGuardarRequerimientos();
    //this.modalAgradecimiento = true;
  }

  cerrarModalAgradecimiento() {
    this.modalAgradecimiento = false;
    this._router.navigateByUrl('/home/perfil');
  }

  cargarRequerimientos() {
    this._profesorService.obtenerRequerimiento().subscribe(dataResponse=>{
      if(dataResponse.msg == 'OK') {
        this.requerimientosCargados.push(...dataResponse.result.map((data:any,index:any)=>{
          let TipoReq = "";
          debugger;
          switch(data.tipo_requerimiento){
            case "1":
              TipoReq = "NFA";
              break;
            case "2":
              TipoReq = 'NFN';
              break;
            case "3":
              TipoReq = 'FA';
              break;
            case "4":
              TipoReq = 'FN';
              break;
              case "5":
              TipoReq = 'RF';
              break;
            case "6":
              TipoReq = 'RNF';
              break;
          }
            return {
              id: index,
              requerimiento: data.titulo,
              retroalimentacion: data.retroalimentacion,
              opcionRequerimiento: TipoReq
            }
        }))
      }
    })
  }

  openSnackBar(message: string, class_customer: string) {
    const config = new MatSnackBarConfig();
    config.duration = 3000;
    config.verticalPosition = 'top';
    config.horizontalPosition = 'center';
    config.panelClass = [class_customer];
    this._snackBar.open(message,'',config);
  }

}
