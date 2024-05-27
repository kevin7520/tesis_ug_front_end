import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HomeService } from 'src/app/Modules/AuthModule/Service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']

})
export class HomeComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, private _translateService: TranslateService, private _router : Router, private _serviceHome : HomeService) { }

  iniciarSesion : boolean = true;
  ocultarPaaswordCrearCuenta : boolean = true;
  ocultarPaaswordLogin : boolean = true;
  viewMenu : boolean = true;

  usuarioRegistrado = {
    id: 0,
    usuario: "",
    ultimoRegistro: "",
    rol: ""
   }

  menu_lista : any [] = [];

  ngOnInit() {
    this.obtenerRegistro();
  }

  obtenerRegistro() {
    const dataLocal = JSON.parse(localStorage.getItem('persona')!);
    const criteria = {
      "idUsuario": dataLocal.id,
      "usuario": dataLocal.user
    }
    this._serviceHome.recuperarRegistro(criteria).subscribe(dataResponse => {
      if(dataResponse.msg == 'OK') {
        this.usuarioRegistrado = {
          id : dataLocal.id,
          usuario : dataLocal.user,
          ultimoRegistro : dataResponse.result.registro,
          rol : dataResponse.result.rol
        }
        this.llenarOpcionesMenu(dataResponse.result.rol);
        if(dataResponse.result.rol == 'p') {
          this._router.navigateByUrl("/home/perfil");
        }
        else {
          this._router.navigateByUrl("/home/serious-game");
        }
      }
      else {
        this.openSnackBar(this._translateService.instant('USUARIO NO ENCONTRADO'),'custom-snackbar_fallido');
        localStorage.clear();
        this._router.navigateByUrl("/auth");
      }
    })
  }

  llenarOpcionesMenu(rol : string){
    if(rol == 'p') {
      this.menu_lista = [
        {
          titulo: "user-hub-module.home.menu.perfil",
          icono: "bi bi-person-fill-gear",
          ruta: "/home/perfil",
          activo: true,
          id: 2
        },
        {
          titulo: "user-hub-module.home.menu.crear-juego",
          icono: "bi bi-joystick",
          ruta: "/home/crear-juego",
          activo: false,
          id: 3
        },
        {
          titulo: "user-hub-module.home.menu.salir",
          icono: "bi bi-arrow-left-square-fill",
          ruta: "/auth",
          activo: false,
          id: 4
        }
      ]
    }
    else {
      this.menu_lista = [
        {
          titulo: "user-hub-module.home.menu.inicio",
          icono: "bi bi-house-door-fill",
          ruta: "/home/serious-game",
          activo: true,
          id: 1
        },
        {
          titulo: "user-hub-module.home.menu.perfil",
          icono: "bi bi-person-fill-gear",
          ruta: "/home/perfil",
          activo: false,
          id: 2
        },
        {
          titulo: "user-hub-module.home.menu.salir",
          icono: "bi bi-arrow-left-square-fill",
          ruta: "/auth",
          activo: false,
          id: 4
        }
      ]
    }
 }
  cambioMenu(id : number, ruta : string) {
    if(ruta == '/auth') {
      localStorage.clear();
    }
    else {
      this.menu_lista = this.menu_lista.map((menu)=>{
        menu.activo = menu.id == id
        return menu
      })
    }

    this._router.navigateByUrl(ruta);

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
