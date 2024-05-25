import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './View/Pages/home/home.component';
import { SeriosGameComponent } from './View/Pages/serios-game/serios-game.component';
import { PerfilComponent } from './View/Pages/perfil/perfil.component';
import { CreateGameComponent } from './View/Pages/create-game/create-game.component';

const routes: Routes = [
  { path: '', component: HomeComponent, 
    children:[
      {path: 'serious-game', component: SeriosGameComponent},
      {path: 'perfil', component: PerfilComponent},
      {path: 'crear-juego', component: CreateGameComponent},
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingUserHubModule {}
