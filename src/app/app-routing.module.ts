import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginEcommerceComponent } from './login-ecommerce/login-ecommerce.component';
import { LoginLojaFisicaComponent } from './login-loja-fisica/login-loja-fisica.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ListClientesComponent } from './list-clientes/list-clientes.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ListEcommerceComponent } from './list-ecommerce/list-ecommerce.component';
import { LojaFisicaComponent } from './loja-fisica/loja-fisica.component';
import { ListLojaFisicaComponent } from './list-loja-fisica/list-loja-fisica.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'loginEcommerce', component: LoginEcommerceComponent},
  { path: 'loginLojaFisica', component: LoginLojaFisicaComponent},
  { path: 'cliente', component: ClienteComponent},
  { path: 'ecommerce', component: EcommerceComponent},
  // Adm
  { path: 'listClientes', component: ListClientesComponent },
  // Adm
  { path: 'listEcommerce', component: ListEcommerceComponent},
  // Adm
  { path: 'lojaFisica', component: LojaFisicaComponent},
  // Adm
  { path: 'listLojaFisica', component: ListLojaFisicaComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
