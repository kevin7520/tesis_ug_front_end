import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Nivel, Requerimiento } from '../../Model/requerimientos.model';

@Component({
  selector: 'app-form-agregar-nivel',
  templateUrl: './form-agregar-nivel.component.html',
  styleUrls: ['./form-agregar-nivel.component.scss']
})
export class FormAgregarNivelComponent implements OnInit {

  @Input() indice! : number;
  @Input() nivel! : Nivel;

  @Output() _guardarRequerimiento = new EventEmitter();
  @Output() _eliminarRequerimiento = new EventEmitter();
  @Output() _finalizarRequerimiento = new EventEmitter();

  agregarRequerimiento = true;
  verificarFinalizar = false;
  verificarRequerimientos = false;

  expandible = true;
  mostrarExpandible = false;

  requrimientoData! : Requerimiento;

  constructor() { }

  options_game : any[] = [
    { name: 'tipo-juego.juego 1', code: 'J1' },
    { name: 'tipo-juego.juego 2', code: 'J2' },
    { name: 'tipo-juego.juego 3', code: 'J3' }
  ];

  options_Requerimientos : any[] = [
    { name: 'No funcional ambiguo', code: 'NFA' },
    { name: 'No Funicional no ambiguo', code: 'NFN' },
    // { name: 'Funcional Ambiguo', code: 'FA' },
    // { name: 'Funcional no ambiguo', code: 'FN' },
  ];

  displayedColumns: string[] = ['position', 'req', 'typeReq', 'ReqPlus', 'pts', "acctions"];

  
  ngOnInit() {
    this.requrimientoData = this.llenarDatoRequerimiento();
  }

  llenarDatoRequerimiento() : Requerimiento {
    const id_req = this.indice+'req'+(this.nivel.requerimientos.length+1);
    const data : Requerimiento = {
      requerimiento: "",
      retroalimentacion: "",
      opcionRequerimiento: "NFA",
      puntosAdicionales: 100,
      id: id_req,
      requerimientoFallido: false,
      requerimientoCompleto: "No"
    }
    return data;
  }

  cancelarRegistro() {
    this.agregarRequerimiento = false;
    this.requrimientoData = this.llenarDatoRequerimiento();
  }
  validarGuardarRequerimiento() : boolean {
    return (this.requrimientoData.requerimiento == '') ? true : false;
  }

  guardarRequerimiento() {
    this.agregarRequerimiento = false;
    const requerimientoTemp = {...this.requrimientoData};
    this.requrimientoData = this.llenarDatoRequerimiento();
    this._guardarRequerimiento.emit(requerimientoTemp);
  }

  eliminarRequerimiento(indice : number) {
    this._eliminarRequerimiento.emit(indice);
  }

  editarRequerimiento(indice : number) {
    
  }

  _agregarRequerimiento() {
    this.agregarRequerimiento = true;
    this.requrimientoData = this.llenarDatoRequerimiento();
  }

  finalizarNivel() {
    this.verificarFinalizar = false;
    this.expandible = false;
    this.mostrarExpandible = true;
    this._finalizarRequerimiento.emit();
  }

  verificarDosRequisitos() {
    const requerimientoTemp = this.nivel.requerimientos[0].opcionRequerimiento;
    const RequerimientosTemp = this.nivel.requerimientos.filter(_ => _.opcionRequerimiento != requerimientoTemp);
    if(RequerimientosTemp.length == 0) {
      this.verificarRequerimientos = true;
    }
    else {
      this.verificarFinalizar = true;
    }
  }


}
