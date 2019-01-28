import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { DbService } from './servicos/db.service';
import { AuthService } from './servicos/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { ClienteComponent } from './cliente/cliente.component';
import { ListClientesComponent } from './list-clientes/list-clientes.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ListEcommerceComponent } from './list-ecommerce/list-ecommerce.component';
import { LojaFisicaComponent } from './loja-fisica/loja-fisica.component';
import { ListLojaFisicaComponent } from './list-loja-fisica/list-loja-fisica.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuLojaFisicaComponent } from './menu-loja-fisica/menu-loja-fisica.component';
import { MenuEcommerceComponent } from './menu-ecommerce/menu-ecommerce.component';
import { MenuClienteComponent } from './menu-cliente/menu-cliente.component';
import { LoginEcommerceComponent } from './login-ecommerce/login-ecommerce.component';
import { LoginLojaFisicaComponent } from './login-loja-fisica/login-loja-fisica.component';
import { MenuClienteModule } from './menu-cliente/menu-cliente.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClienteComponent,
    ListClientesComponent,
    EcommerceComponent,
    ListEcommerceComponent,
    LojaFisicaComponent,
    ListLojaFisicaComponent,
    LoginComponent,
    MenuLojaFisicaComponent,
    MenuEcommerceComponent,
    LoginEcommerceComponent,
    LoginLojaFisicaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuClienteModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: [
    DbService,
    AuthService,
    AuthGuard,
    AngularFireDatabase,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
