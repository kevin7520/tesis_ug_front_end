import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page404Component } from './Common/page-404/page-404.component';
import { Change_of_anguageComponent } from './Common/change_of_anguage/change_of_anguage.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { UiKaasButtonComponent } from './Common/ui-kaas-button/ui-kaas-button.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule, 
    MatMenuModule,
    TranslateModule
  ],
  declarations: [
    Page404Component,
    Change_of_anguageComponent,
    UiKaasButtonComponent
  ],
  exports: [
    Page404Component,
    Change_of_anguageComponent,
    MatButtonModule, 
    MatMenuModule,
    UiKaasButtonComponent
  ]
})
export class Shared_moduleModule { }
