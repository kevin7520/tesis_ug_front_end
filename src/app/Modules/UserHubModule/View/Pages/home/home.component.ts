import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']

})
export class HomeComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, private _translateService: TranslateService, private _router : Router) { }

  iniciarSesion : boolean = true;
  ocultarPaaswordCrearCuenta : boolean = true;
  ocultarPaaswordLogin : boolean = true;
  viewMenu : boolean = true;

  usuarioRegistrado = {
    id: 3,
    usuario: "Kevin Arévalo",
    ultimoRegistro: "12/10/2024 8:30 AM"
   }

  menu_lista = [
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

  loginFormGroup = new FormGroup({
    usuario: new FormControl('', { validators: Validators.required, updateOn: 'blur' }),
    password: new FormControl('', { validators: Validators.required, updateOn: 'blur' }),
    // nombre_responsable_editar: new FormControl('', { validators: Validators.required, updateOn: 'blur' }),
    // numero_responsable_editar: new FormControl('', { validators: [Validators.required, Validators.minLength(8), Validators.maxLength(8)], updateOn: 'blur' })
  });

  crearCuentaFormGroup = new FormGroup({
    usuario: new FormControl('', { validators: Validators.required, updateOn: 'blur' }),
    correo: new FormControl('', { validators: Validators.required, updateOn: 'blur' }),
    password: new FormControl('', { validators: Validators.required, updateOn: 'blur' }),
    confirmarPassword: new FormControl('', { validators: Validators.required, updateOn: 'blur' }),
  });

  ngOnInit() {}

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

  // login() {
  //   const criteria = {
  //     usuario: this.loginFormGroup.value.usuario,
  //     password: this.loginFormGroup.value.password
  //   }

  //   if(criteria.usuario == 'kaas' && criteria.password == 'Bg123456')
  //       this.openSnackBar(this._translateService.instant('aut-module.input.login-exitoso'),'custom-snackbar_exitoso');
  //   else
  //       this.openSnackBar(this._translateService.instant('aut-module.input.login-fallido'),'custom-snackbar_fallido');
  // }

  // openSnackBar(message: string, class_customer: string) {
  //   const config = new MatSnackBarConfig();
  //   config.duration = 3000;
  //   config.verticalPosition = 'top';
  //   config.horizontalPosition = 'center';
  //   config.panelClass = [class_customer];
  //   this._snackBar.open(message,'',config);
  // }

}
