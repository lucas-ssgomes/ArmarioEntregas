import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdmComponent } from './adm.component';
import { MenuAdmComponent } from './menu-adm/menu-adm.component';
import { AdmGuard } from './../guards/adm.guard';

const admRoutes = [
  { path: 'loginAdm', component: AdmComponent},
  { path: 'menuAdm', component: MenuAdmComponent, canActivate: [AdmGuard]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(admRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AdmRoutingModule { }
