import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuLojaFisicaComponent } from './menu-loja-fisica.component';
import { GuardarPedidoComponent } from './guardar-pedido/guardar-pedido.component';
import { RetirarPedidoComponent } from './retirar-pedido/retirar-pedido.component';
import { StatusPedidosComponent } from './status-pedidos/status-pedidos.component';
import { MenuLojaFisicaRoutingModule } from './menu-loja-fisica-routing.module';


@NgModule({
  declarations: [
    MenuLojaFisicaComponent,
    GuardarPedidoComponent,
    RetirarPedidoComponent,
    StatusPedidosComponent],
  imports: [
    CommonModule,
    MenuLojaFisicaRoutingModule,
  ]
})
export class MenuLojaFisicaModule { }
