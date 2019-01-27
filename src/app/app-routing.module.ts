import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteComponent } from './cliente/cliente.component';
import { ListClientesComponent } from './list-clientes/list-clientes.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ListEcommerceComponent } from './list-ecommerce/list-ecommerce.component';
import { LojaFisicaComponent } from './loja-fisica/loja-fisica.component';
import { ListLojaFisicaComponent } from './list-loja-fisica/list-loja-fisica.component';

const routes: Routes = [
  { path: 'cliente', component: ClienteComponent },
  { path: 'listClientes', component: ListClientesComponent },
  { path: 'ecommerce', component: EcommerceComponent },
  { path: 'listEcommerce', component: ListEcommerceComponent},
  { path: 'lojaFisica', component: LojaFisicaComponent},
  { path: 'listLojaFisica', component: ListLojaFisicaComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
