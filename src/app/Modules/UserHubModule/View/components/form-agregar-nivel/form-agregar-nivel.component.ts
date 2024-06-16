import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Nivel, Requerimiento } from '../../Model/requerimientos.model';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-form-agregar-nivel',
  templateUrl: './form-agregar-nivel.component.html',
  styleUrls: ['./form-agregar-nivel.component.scss']
})
export class FormAgregarNivelComponent implements OnInit {

  @Input() indice! : number;
  @Input() nivel! : Nivel;
  @Input() requerimientosCargados : any[] = [];

  @Output() _guardarRequerimiento = new EventEmitter();
  @Output() _eliminarRequerimiento = new EventEmitter();
  @Output() _finalizarRequerimiento = new EventEmitter();

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  agregarRequerimiento = true;
  verificarFinalizar = false;
  verificarRequerimientos = false;
  verRequerimientosCargados = false;
  verActualizar = false;
  id_Actualizar = "";

  expandible = true;
  mostrarExpandible = false;
  requrimientoCargado = "no";

  requrimientoData! : Requerimiento;
  requerimientoDataCopy!: Requerimiento;


  constructor() {
    this.dataSource = new MatTableDataSource(this.requerimientosCargados);
   }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['requerimientosCargados']) {
      //this.ejecutarMetodo(changes['value'].currentValue);
      this.dataSource = new MatTableDataSource(this.requerimientosCargados);
      if (this.paginator) {
        this.dataSource.paginator = this.paginator;
      } else {
        this.dataSource.paginator = null; // Maneja el caso cuando paginator es undefined
      }
      if (this.sort) {
        this.dataSource.sort = this.sort;
      } else {
        this.dataSource.sort = null; // Maneja el caso cuando paginator es undefined
      }
    }
  }

  options_game : any[] = [];

  options_Requerimientos : any[] = [
    { name: 'No funcional ambiguo', code: 'NFA' },
    { name: 'No Funicional no ambiguo', code: 'NFN' },
    // { name: 'Funcional Ambiguo', code: 'FA' },
    // { name: 'Funcional no ambiguo', code: 'FN' },
  ];

  displayedColumns: string[] = ['position', 'req', 'typeReq', 'ReqPlus', 'pts', 'base', "acctions"];

  requisitosCargadosColumnas: string[] = ['position', 'req', 'typeReq', 'ReqPlus', "acctions"];

  // requerimientosCargados : any[] = [
  //   {id: 1, requerimiento: "Hola", retroalimentacion: "Hola2", opcionRequerimiento: "NFA"},
  //   {id: 1, requerimiento: "Hola2", retroalimentacion: "Hola3", opcionRequerimiento: "NFN"},
  //   {id: 1, requerimiento: "Hola3", retroalimentacion: "Hola4", opcionRequerimiento: "NFN"},
  //   {id: 1, requerimiento: "Hola4", retroalimentacion: "Hola6", opcionRequerimiento: "NFN"},
  //   {id: 1, requerimiento: "Hola5", retroalimentacion: "Hola5", opcionRequerimiento: "NFN"},
  //   {id: 1, requerimiento: "Hola", retroalimentacion: "Hola", opcionRequerimiento: "NFN"},
  //   {id: 1, requerimiento: "Hola", retroalimentacion: "Hola", opcionRequerimiento: "NFA"},
  //   {id: 1, requerimiento: "Hola", retroalimentacion: "Hola", opcionRequerimiento: "NFA"},
  //   {id: 1, requerimiento: "Hola", retroalimentacion: "Hola", opcionRequerimiento: "NFA"},
  //   {id: 1, requerimiento: "Hola", retroalimentacion: "Hola", opcionRequerimiento: "NFA"},
  //   {id: 1, requerimiento: "Hola", retroalimentacion: "Hola", opcionRequerimiento: "NFA"},
  //   {id: 1, requerimiento: "Hola", retroalimentacion: "Hola", opcionRequerimiento: "NFA"},
  //   {id: 1, requerimiento: "Hola", retroalimentacion: "Hola", opcionRequerimiento: "NFA"},
  //   {id: 1, requerimiento: "Hola", retroalimentacion: "Hola", opcionRequerimiento: "NFA"},
  //   {id: 1, requerimiento: "Hola", retroalimentacion: "Hola", opcionRequerimiento: "NFA"},
  //   {id: 1, requerimiento: "Hola", retroalimentacion: "Hola", opcionRequerimiento: "NFA"},
  //   {id: 1, requerimiento: "Hola", retroalimentacion: "Hola", opcionRequerimiento: "NFA"},
  //   {id: 1, requerimiento: "Hola", retroalimentacion: "Hola", opcionRequerimiento: "NFA"},
  //   {id: 1, requerimiento: "Hola", retroalimentacion: "Hola", opcionRequerimiento: "NFA"},
  //   {id: 1, requerimiento: "Hola", retroalimentacion: "Hola", opcionRequerimiento: "NFA"},
  //   {id: 1, requerimiento: "Hola", retroalimentacion: "Hola", opcionRequerimiento: "NFA"},
  //   {id: 1, requerimiento: "Hola", retroalimentacion: "Hola", opcionRequerimiento: "NFA"},
  //   {id: 1, requerimiento: "Hola", retroalimentacion: "Hola", opcionRequerimiento: "NFA"},
  //   {id: 1, requerimiento: "Hola", retroalimentacion: "Hola", opcionRequerimiento: "NFA"},
  //   {id: 1, requerimiento: "Hola", retroalimentacion: "Hola", opcionRequerimiento: "NFA"},
  //   {id: 1, requerimiento: "Hola", retroalimentacion: "Hola", opcionRequerimiento: "NFA"},
  //   {id: 1, requerimiento: "Hola", retroalimentacion: "Hola", opcionRequerimiento: "NFA"},
  //   {id: 1, requerimiento: "Hola", retroalimentacion: "Hola", opcionRequerimiento: "NFA"},
  //   {id: 1, requerimiento: "Hola", retroalimentacion: "Hola", opcionRequerimiento: "NFA"},
  //   {id: 1, requerimiento: "Hola", retroalimentacion: "Hola", opcionRequerimiento: "NFA"},
  //   {id: 1, requerimiento: "Hola", retroalimentacion: "Hola", opcionRequerimiento: "NFA"},
  //   {id: 1, requerimiento: "Hola", retroalimentacion: "Hola", opcionRequerimiento: "NFA"},
  //   {id: 1, requerimiento: "Hola", retroalimentacion: "Hola", opcionRequerimiento: "NFA"},
  //   {id: 1, requerimiento: "Hola", retroalimentacion: "Hola", opcionRequerimiento: "NFA"},
  //   {id: 1, requerimiento: "Hola", retroalimentacion: "Hola", opcionRequerimiento: "NFA"},
  //   {id: 1, requerimiento: "Hola", retroalimentacion: "Hola", opcionRequerimiento: "NFA"},
  //   {id: 1, requerimiento: "Hola", retroalimentacion: "Hola", opcionRequerimiento: "NFA"},
  //   {id: 1, requerimiento: "Hola", retroalimentacion: "Hola", opcionRequerimiento: "NFA"},
  //   {id: 1, requerimiento: "Hola", retroalimentacion: "Hola", opcionRequerimiento: "NFA"}
  // ]

  dataSource!: MatTableDataSource<any>;
  
  ngOnInit() {
    this.requrimientoData = this.llenarDatoRequerimiento();
    this.requerimientoDataCopy ={...this.requrimientoData};
    this.options_game = [
      { label: 'Sì', value: 'si' },
      { label: 'No', value: 'no' },
    ];
  }

  ngAfterViewInit() {
    // if (this.paginator) {
    //   this.dataSource.paginator = this.paginator;
    // } else {
    //   this.dataSource.paginator = null; // Maneja el caso cuando paginator es undefined
    // }
    // if (this.sort) {
    //   this.dataSource.sort = this.sort;
    // } else {
    //   this.dataSource.sort = null; // Maneja el caso cuando paginator es undefined
    // }
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
      requerimientoCompleto: "No",
      requerimientoBase: "No"
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
    this.requerimientoDataCopy = {...this.requrimientoData};
    this.requrimientoCargado = "no";
    this.valorAntiguoOpcion = "no";
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

  valorAntiguoOpcion: string = "no";
  onChangeRequerimientos(event:any) {
    if(this.valorAntiguoOpcion != event) {
      if(event == 'si') {
        this.requerimientoDataCopy = {...this.requrimientoData};
        this.requrimientoData.opcionRequerimiento = "";
        this.requrimientoData.requerimiento = "";
        this.requrimientoData.retroalimentacion = "";
        this.requrimientoData.requerimientoBase = "Sí"
      }
      else {
        this.requrimientoData = {...this.requerimientoDataCopy};
        this.requrimientoData.requerimientoBase = "No";
      }
      this.valorAntiguoOpcion = event;
    }
  }

  seleccionarRequerimientoCargado(index: number) {
    debugger;
    this.requrimientoData.requerimiento = this.requerimientosCargados[index].requerimiento;
    this.requrimientoData.retroalimentacion = this.requerimientosCargados[index].retroalimentacion;
    this.requrimientoData.opcionRequerimiento = this.requerimientosCargados[index].opcionRequerimiento;
    this.salirEscogerRequerimiento();
  }

  salirEscogerRequerimiento() {
    this.verRequerimientosCargados = false;
  }

  abrirModalRequerimientosCargados() {
    this.verRequerimientosCargados = true;
  }

  abirModalActualiza(index: number) {
    this.verActualizar = true;
    this.id_Actualizar = this.nivel.requerimientos[index].id;
    this.requrimientoData.requerimiento = this.nivel.requerimientos[index].requerimiento;
    this.requrimientoData.retroalimentacion = this.nivel.requerimientos[index].retroalimentacion;
    this.requrimientoData.opcionRequerimiento = this.nivel.requerimientos[index].opcionRequerimiento;
    this.requrimientoData.puntosAdicionales = this.nivel.requerimientos[index].puntosAdicionales;
  }

  cerrarModalActualiza() {
    this.verActualizar = false;
    this.id_Actualizar = "";
  }

  actualizarRegisto() {
    const index = this.nivel.requerimientos.findIndex(data => data.id == this.id_Actualizar);
    this.nivel.requerimientos[index].id = this.id_Actualizar;
    this.nivel.requerimientos[index].requerimiento = this.requrimientoData.requerimiento;
    this.nivel.requerimientos[index].retroalimentacion = this.requrimientoData.retroalimentacion;
    this.nivel.requerimientos[index].opcionRequerimiento = this.requrimientoData.opcionRequerimiento;
    this.nivel.requerimientos[index].puntosAdicionales = this.requrimientoData.puntosAdicionales;
    this.cerrarModalActualiza();
  }


}
