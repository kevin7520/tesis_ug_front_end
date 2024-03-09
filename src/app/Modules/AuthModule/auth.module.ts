import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './View/login/login.component';
import { AppRoutingAuthModule } from './auth-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingAuthModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [

  ]
})
export class AuthModule { }
