import { AdmGuard } from './../guards/adm.guard';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuLojaFisicaComponent } from './menu-loja-fisica.component';
import { GuardarPedidoComponent } from './guardar-pedido/guardar-pedido.component';
import { RetirarPedidoComponent } from './retirar-pedido/retirar-pedido.component';
import { StatusPedidosComponent } from './status-pedidos/status-pedidos.component';
import { AuthLojaFisicaGuard } from '../guards/auth-loja-fisica.guard';

const menuLojaFisicaRoutes = [
  { path: 'menuLojaFisica', component: MenuLojaFisicaComponent, canActivate: [AuthLojaFisicaGuard, AdmGuard], children: [
    // Children Login Loja Fisica
    { path: 'guardarPedido', component: GuardarPedidoComponent},
    // Children Login Loja Fisica
    { path: 'retirarPedido', component: RetirarPedidoComponent},
    // Children Login Loja Fisica
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
