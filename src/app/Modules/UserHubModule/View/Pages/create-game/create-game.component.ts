import { Component, DoCheck, ElementRef, OnInit } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent implements OnInit {


  options_game : any[] = [
    { name: 'tipo-juego.juego 1', code: 'J1' },
    { name: 'tipo-juego.juego 2', code: 'J2' },
    { name: 'tipo-juego.juego 3', code: 'J3' }
  ];

  ELEMENT_DATA: any[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

  datosJuego = {
    fechaFinalizacion: new Date(),
    niveles: [
     {
      id_nivel: 1+'nivel',
      nivel: 1,
      opcionJuego: "J1",
      requerimientos : [
        {
          requerimiento: "",
          retroalimentacion: "",
          opcionRequerimiento: "NFN",
          puntosAdicionales: 100
        }
      ]
     }
    ]
  }

  id_menu : string = "pruebaEstilo";

  option_select: string = "";
  option_code: string = "J1";

  
  menuOpen: boolean | undefined;
  dataSource = this.ELEMENT_DATA;
  displayedColumns: string[] = ['position', 'req', 'typeReq', 'ReqPlus', "acctions"];
  constructor(private buttonRef: ElementRef) {
    
   }

  ngOnInit() {
    
    
  }
  

  crearNuevoNivel() {
    const indice = this.datosJuego.niveles.length-1;
    const id_ultimo : number = this.datosJuego.niveles[indice].nivel+1;
    const criteria =  {
      id_nivel: id_ultimo+'nivel',
      nivel: id_ultimo,
      opcionJuego: "J1",
      requerimientos : [
        {
          requerimiento: "",
          retroalimentacion: "",
          opcionRequerimiento: "NFN",
          puntosAdicionales: 100
        }
      ]
     }
    this.datosJuego.niveles.push(criteria);
  }

  crearNuevoRequerimiento(indiceNivel : number) {
    const criteria = {
      requerimiento: "",
      retroalimentacion: "",
      opcionRequerimiento: "NFN",
      puntosAdicionales: 100
    }
    this.datosJuego.niveles[indiceNivel].requerimientos.push(criteria);
  }

  
  

}
