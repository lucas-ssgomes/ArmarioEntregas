import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdmComponent } from './adm.component';
import { MenuAdmComponent } from './menu-adm/menu-adm.component';
import { AdmRoutingModule } from './adm-routing.module';

@NgModule({
  declarations: [
    AdmComponent,
    MenuAdmComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdmRoutingModule,
  ]
})
export class AdmModule { }
