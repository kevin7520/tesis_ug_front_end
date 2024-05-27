import { Component, DoCheck, ElementRef, OnInit } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent implements OnInit, DoCheck {


  options_game : any[] = [
    { name: 'tipo-juego.juego 1', code: 'J1' },
    { name: 'tipo-juego.juego 2', code: 'J2' },
    { name: 'tipo-juego.juego 3', code: 'J3' }
  ];

  datosJuego = {
    fechaFinalizacion: new Date(),
    data: [
      {
        option_code: "J1",
        option_select: "",
        requerimiento: "",
        retroalimentacion: ""
      }
    ]
  }

  id_menu : string = "pruebaEstilo";

  option_select: string = "";
  option_code: string = "J1";

  classStyleActive : boolean = false;
  menuOpen: boolean | undefined;

  constructor(private buttonRef: ElementRef) {
    this.selectTypeGame("J1",0);
   }

  ngOnInit() {
  }

  ngDoCheck(){
    this.adjustPanelWidth();
  }

  adjustPanelWidth(): void {
    const widthButton= document.getElementById("menuElement")?.offsetWidth;
    const element = document.getElementsByClassName('mat-mdc-menu-content') as HTMLCollectionOf<HTMLElement>;
    const elementPanel = document.getElementsByClassName('mat-mdc-menu-panel') as HTMLCollectionOf<HTMLElement>;
    for(var i = 0; i < element.length; i++) {
      if(element[i].offsetParent?.classList.contains(this.id_menu))
      element[i].style.width = widthButton+"px";
      elementPanel[i].style.maxWidth = "none";
      elementPanel[i].style.marginTop = "4px";
    }
  }

  selectTypeGame(code : string, index : number) {
    const index_label = this.options_game.findIndex(value=> value.code == code);
    this.datosJuego.data[index].option_select = this.options_game[index_label].name;
    this.datosJuego.data[index].option_code = this.options_game[index_label].code;
  }

  onChangeTypeGame(code : string, index : number){
    this.selectTypeGame(code, index);
  }

  createNuveoNivel() {
    const criteria =  {
      option_code: "J1",
      option_select: "",
      requerimiento: "",
      retroalimentacion: ""
    }
    this.datosJuego.data.push(criteria);
    this.selectTypeGame("J1",this.datosJuego.data.length -1);
  }

  openMenu(){
    this.classStyleActive = true;
  }

  closeMenu() {
    this.classStyleActive = false;
  }
  

}
