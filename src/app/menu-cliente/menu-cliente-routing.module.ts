import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ListarPedidoComponent } from './listar-pedido/listar-pedido.component';
import { MenuClienteComponent } from './menu-cliente.component';
import { PerfilClienteComponent } from './perfil-cliente/perfil-cliente.component';

const menuClienteRoutes = [
  { path: 'menuCliente', component: MenuClienteComponent, children: [
    { path: 'listarPedido', component: ListarPedidoComponent},
    { path: 'perfilCliente', component: PerfilClienteComponent}
  ]},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(menuClienteRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class MenuClienteRoutingModule { }
