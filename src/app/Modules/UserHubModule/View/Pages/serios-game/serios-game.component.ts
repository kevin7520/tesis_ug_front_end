import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
@Component({
  selector: 'app-serios-game',
  templateUrl: './serios-game.component.html',
  styleUrls: ['./serios-game.component.scss']
})
export class SeriosGameComponent implements OnInit {

  constructor(private dragulaService: DragulaService) {
    dragulaService.createGroup('my-bag', {
      // Configuración opcional aquí
    });
   }

  ngOnInit() {
  }

  requesitosAmbiguos : any[] = [
    { texto : "Prueba 1"},
    { texto : "Prueba 2"},
    { texto : "Prueba 3"},
    { texto : "Prueba 4"}
  ]

  requesitosNoAmbiguos : any[] = [
    { texto : "Prueba 5"},
    { texto : "Prueba 6"},
    { texto : "Prueba 7"},
    { texto : "Prueba 8"}
  ]

}
