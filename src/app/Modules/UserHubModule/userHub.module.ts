import { NgModule } from '@angular/core';
import { Shared_moduleModule } from 'src/app/Shared/shared_module.module';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AppRoutingUserHubModule } from './userHub-routing.module';
import { HomeComponent } from './View/Pages/home/home.component';
import { SeriosGameComponent } from './View/Pages/serios-game/serios-game.component';
import { PerfilComponent } from './View/Pages/perfil/perfil.component';
import { DragulaModule } from 'ng2-dragula';
import { CreateGameComponent } from './View/Pages/create-game/create-game.component';

@NgModule({
  imports: [
    CommonModule,
    Shared_moduleModule,
    TranslateModule,
    AppRoutingUserHubModule,
    //DragulaModule.forRoot()
  ],
  declarations: [
    HomeComponent,
    SeriosGameComponent,
    PerfilComponent,
    CreateGameComponent
  ]
})
export class UserHubModule { }
