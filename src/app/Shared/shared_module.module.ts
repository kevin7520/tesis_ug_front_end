import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page404Component } from './Common/page-404/page-404.component';
import { Change_of_anguageComponent } from './Common/change_of_anguage/change_of_anguage.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule} from '@ngx-translate/core';
import { UiKaasButtonComponent } from './Common/ui-kaas-button/ui-kaas-button.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule, 
    MatMenuModule,
    TranslateModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSnackBarModule,
    MatDividerModule
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
    UiKaasButtonComponent,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSnackBarModule,
    MatDividerModule
  ],
  providers: [{provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}],
})
export class Shared_moduleModule { }
