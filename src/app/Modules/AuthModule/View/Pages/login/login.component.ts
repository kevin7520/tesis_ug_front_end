import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']

})
export class LoginComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, private _translateService: TranslateService) { }

  iniciarSesion : boolean = true;
  ocultarPaaswordCrearCuenta : boolean = true;
  ocultarPaaswordLogin : boolean = true;

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

  login() {
    const criteria = {
      usuario: this.loginFormGroup.value.usuario,
      password: this.loginFormGroup.value.password
    }

    if(criteria.usuario == 'kaas' && criteria.password == 'Bg123456')
        this.openSnackBar(this._translateService.instant('aut-module.input.login-exitoso'),'custom-snackbar_exitoso');
    else
        this.openSnackBar(this._translateService.instant('aut-module.input.login-fallido'),'custom-snackbar_fallido');
  }

  openSnackBar(message: string, class_customer: string) {
    const config = new MatSnackBarConfig();
    config.duration = 3000; // Duración en milisegundos
    config.verticalPosition = 'top'; // Posición vertical arriba
    config.horizontalPosition = 'center'; // Posición horizontal a la derecha
    config.panelClass = [class_customer];
    this._snackBar.open(message,'',config);
  }

}
