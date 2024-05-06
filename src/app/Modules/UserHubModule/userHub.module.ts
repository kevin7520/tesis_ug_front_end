import { NgModule } from '@angular/core';
import { Shared_moduleModule } from 'src/app/Shared/shared_module.module';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AppRoutingUserHubModule } from './userHub-routing.module';
import { HomeComponent } from './View/Pages/home/home.component';
import { SeriosGameComponent } from './View/Pages/serios-game/serios-game.component';
import { PerfilComponent } from './View/Pages/perfil/perfil.component';

@NgModule({
  imports: [
    CommonModule,
    Shared_moduleModule,
    TranslateModule,
    AppRoutingUserHubModule
  ],
  declarations: [
    HomeComponent,
    SeriosGameComponent,
    PerfilComponent
  ]
})
export class UserHubModule { }
