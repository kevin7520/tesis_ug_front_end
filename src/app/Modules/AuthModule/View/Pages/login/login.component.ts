import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import * as CryptoJS from 'crypto-js';
import { SecretKey } from 'src/app/Utils/const';
import { AuthService } from '../../../Service/auth.service';
import * as bcrypt from 'bcryptjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']

})
export class LoginComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, private _translateService: TranslateService, private _serviceAuth : AuthService, private _roter: Router) { }

  iniciarSesion : boolean = true;
  ocultarPaaswordCrearCuenta : boolean = true;
  ocultarPaaswordLogin : boolean = true;
  secretKey = SecretKey.secret;

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
    
    const passworEcripty : string = String(this.loginFormGroup.value.password);
    //const encryptedPassword =  CryptoJS.AES.encrypt(passworEcripty, 'seriousGame').toString();
    //const base64EncodedPassword = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(encryptedPassword));
    //const base64EncodedPassword = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(encryptedPassword));
  //   const saltRounds = 10; // El número de rondas de hashing
  //   bcrypt.hash(passworEcripty, saltRounds, (err, hash) => {
  //   console.log('Contraseña encriptada:', hash);
   
        
  // });
  const criteria = {
    usuario: String(this.loginFormGroup.value.usuario),
    password: String(this.loginFormGroup.value.password)
  }

  this._serviceAuth.login(criteria).subscribe(data=>{
    if(data.msg == 'usuario_incorrecto' || data.msg == 'password_incorrecto') {
      
    }
    else {
      this.openSnackBar(this._translateService.instant('aut-module.input.login-exitoso'),'custom-snackbar_exitoso');
      this._roter.navigateByUrl("/home");
    }
  })

  //this.openSnackBar(this._translateService.instant('aut-module.input.login-fallido'),'custom-snackbar_fallido');


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
