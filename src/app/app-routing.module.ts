import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginEcommerceComponent } from './login-ecommerce/login-ecommerce.component';
import { LoginLojaFisicaComponent } from './login-loja-fisica/login-loja-fisica.component';
import { ClienteComponent } from './cliente/cliente.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'loginEcommerce', component: LoginEcommerceComponent},
  { path: 'loginLojaFisica', component: LoginLojaFisicaComponent},
  { path: 'cliente', component: ClienteComponent},
  { path: 'ecommerce', component: EcommerceComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
