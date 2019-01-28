import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuClienteComponent } from './menu-cliente.component';
import { ListarPedidoComponent } from './listar-pedido/listar-pedido.component';
import { MenuClienteRoutingModule } from './menu-cliente-routing.module';
import { PerfilClienteComponent } from './perfil-cliente/perfil-cliente.component';

@NgModule({
  declarations: [
    MenuClienteComponent,
    ListarPedidoComponent,
    PerfilClienteComponent,
  ],
  imports: [
    CommonModule,
    MenuClienteRoutingModule
  ]
})
export class MenuClienteModule { }
