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

  id_menu : string = "pruebaEstilo";

  option_select: string = "";
  option_code: string = "J1";

  classStyleActive : boolean = false;
  menuOpen: boolean | undefined;

  constructor(private buttonRef: ElementRef) {
    this.selectTypeGame("J1");
   }

  ngOnInit() {
  }

  ngDoCheck(){
    this.adjustPanelWidth();
  }

  adjustPanelWidth(): void {
    const widthButton= document.getElementById("menuElement")!.offsetWidth;
    const element = document.getElementsByClassName('mat-mdc-menu-content') as HTMLCollectionOf<HTMLElement>;
    const elementPanel = document.getElementsByClassName('mat-mdc-menu-panel') as HTMLCollectionOf<HTMLElement>;
    for(var i = 0; i < element.length; i++) {
      if(element[i].offsetParent?.classList.contains(this.id_menu))
      element[i].style.width = widthButton+"px";
      elementPanel[i].style.maxWidth = "none";
      elementPanel[i].style.marginTop = "4px";
    }
    console.log(element)
  }

  selectTypeGame(code : string) {
    const index_label = this.options_game.findIndex(value=> value.code == code);
    this.option_select = this.options_game[index_label].name;
    this.option_code = this.options_game[index_label].code;
  }

  onChangeTypeGame(code : string){
    this.selectTypeGame(code);
  }

  openMenu(){
    console.log("HOKA");
    this.classStyleActive = true;
  }

  closeMenu() {
    console.log("cierre");
    this.classStyleActive = false;
  }
  

}
