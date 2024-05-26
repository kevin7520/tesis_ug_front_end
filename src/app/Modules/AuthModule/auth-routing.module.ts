import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './View/Pages/login/login.component';
import { MigracionComponent } from './View/Pages/migracion/migracion.component';
import { AuthModuloComponent } from './auth-module.component';

const routes: Routes = [
    { path: '', component: AuthModuloComponent, children: [
      { path: '', component: LoginComponent },
      { path: 'completar-perfil', component: MigracionComponent}
    ]},    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingAuthModule {}
