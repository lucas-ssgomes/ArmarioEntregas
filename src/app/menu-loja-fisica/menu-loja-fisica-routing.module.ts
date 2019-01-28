import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuLojaFisicaComponent } from './menu-loja-fisica.component';
import { GuardarPedidoComponent } from './guardar-pedido/guardar-pedido.component';
import { RetirarPedidoComponent } from './retirar-pedido/retirar-pedido.component';
import { StatusPedidosComponent } from './status-pedidos/status-pedidos.component';

const menuLojaFisicaRoutes = [
  { path: 'menuLojaFisica', component: MenuLojaFisicaComponent, children: [
    { path: 'guardarPedido', component: GuardarPedidoComponent},
    { path: 'retirarPedido', component: RetirarPedidoComponent},
    { path: 'statusPedidos', component: StatusPedidosComponent}
  ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(menuLojaFisicaRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class MenuLojaFisicaRoutingModule { }
