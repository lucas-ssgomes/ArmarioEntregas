import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdmComponent } from './adm.component';
import { MenuAdmComponent } from './menu-adm/menu-adm.component';
import { AdmGuard } from './../guards/adm.guard';
import { ListLojaFisicaComponent } from '../list-loja-fisica/list-loja-fisica.component';
import { ListEcommerceComponent } from '../list-ecommerce/list-ecommerce.component';
import { ListClientesComponent } from '../list-clientes/list-clientes.component';
import { LojaFisicaComponent } from './../loja-fisica/loja-fisica.component';

const admRoutes = [
  { path: 'loginAdm', component: AdmComponent },
  { path: 'menuAdm', component: MenuAdmComponent, canActivate: [AdmGuard], children: [
      { path: 'listClientes', component: ListClientesComponent },
      { path: 'listEcommerce', component: ListEcommerceComponent },
      { path: 'lojaFisica', component: LojaFisicaComponent },
      { path: 'listLojaFisica', component: ListLojaFisicaComponent },
    ]
  }
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
