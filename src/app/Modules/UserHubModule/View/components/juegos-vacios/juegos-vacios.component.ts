import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegos-vacios',
  templateUrl: './juegos-vacios.component.html',
  styleUrls: ['./juegos-vacios.component.scss']
})
export class JuegosVaciosComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  crearJuego() {
    this._router.navigateByUrl('/home/crear-juego');
  }

}
