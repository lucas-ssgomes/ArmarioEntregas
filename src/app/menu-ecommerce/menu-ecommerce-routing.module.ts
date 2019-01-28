import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MenuEcommerceComponent } from './menu-ecommerce.component';
import { CriarPedidoComponent } from './criar-pedido/criar-pedido.component';
import { GerenciarPedidosComponent } from './gerenciar-pedidos/gerenciar-pedidos.component';

const menuEcommerceRoutes = [
  { path: 'menuEcommerce', component: MenuEcommerceComponent, children: [
    { path: 'criarPedido', component: CriarPedidoComponent},
    { path: 'gerenciarPedidos', component: GerenciarPedidosComponent}
  ]},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(menuEcommerceRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class MenuEcommerceRoutingModule { }
