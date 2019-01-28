import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuEcommerceComponent } from './menu-ecommerce.component';
import { CriarPedidoComponent } from './criar-pedido/criar-pedido.component';
import { GerenciarPedidosComponent } from './gerenciar-pedidos/gerenciar-pedidos.component';
import { MenuEcommerceRoutingModule } from './menu-ecommerce-routing.module';


@NgModule({
  declarations: [
    MenuEcommerceComponent,
    CriarPedidoComponent,
    GerenciarPedidosComponent,
  ],
  imports: [
    CommonModule,
    MenuEcommerceRoutingModule,
  ]
})
export class MenuEcommerceModule { }
