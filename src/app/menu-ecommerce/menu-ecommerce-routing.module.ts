import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MenuEcommerceComponent } from './menu-ecommerce.component';
import { CriarPedidoComponent } from './criar-pedido/criar-pedido.component';
import { GerenciarPedidosComponent } from './gerenciar-pedidos/gerenciar-pedidos.component';
import { AuthEcommerceGuard } from '../guards/auth-ecommerce.guard';

const menuEcommerceRoutes = [
  { path: 'menuEcommerce', component: MenuEcommerceComponent, canActivate: [AuthEcommerceGuard], children: [
    // Children Login Ecommerce
    { path: 'criarPedido', component: CriarPedidoComponent},
    // Children Login Ecommerce
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
