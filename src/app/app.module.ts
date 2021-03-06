import { AuthLojaFisicaService } from './servicos/auth-loja-fisica.service';
import { AuthEcommerceService } from './servicos/auth-ecommerce.service';
import { AuthAdmService } from './servicos/auth-adm.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { DbService } from './servicos/db.service';
import { AuthService } from './servicos/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { AuthEcommerceGuard } from './guards/auth-ecommerce.guard';
import { AuthLojaFisicaGuard } from './guards/auth-loja-fisica.guard';
import { AdmGuard } from './guards/adm.guard';

import { AppRoutingModule } from './app-routing.module';
import { ClienteComponent } from './cliente/cliente.component';
import { ListClientesComponent } from './list-clientes/list-clientes.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ListEcommerceComponent } from './list-ecommerce/list-ecommerce.component';
import { LojaFisicaComponent } from './loja-fisica/loja-fisica.component';
import { ListLojaFisicaComponent } from './list-loja-fisica/list-loja-fisica.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginEcommerceComponent } from './login-ecommerce/login-ecommerce.component';
import { LoginLojaFisicaComponent } from './login-loja-fisica/login-loja-fisica.component';
import { MenuClienteModule } from './menu-cliente/menu-cliente.module';
import { MenuEcommerceModule } from './menu-ecommerce/menu-ecommerce.module';
import { MenuLojaFisicaModule } from './menu-loja-fisica/menu-loja-fisica.module';
import { AdmModule } from './adm/adm.module';


@NgModule({
  // Components
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
    LoginEcommerceComponent,
    LoginLojaFisicaComponent,
  ],

  // Modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuClienteModule,
    MenuEcommerceModule,
    MenuLojaFisicaModule,
    AdmModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  // Services, Guards
  providers: [
    DbService,
    AuthService,
    AuthAdmService,
    AuthEcommerceService,
    AuthLojaFisicaService,
    AuthGuard,
    AuthEcommerceGuard,
    AuthLojaFisicaGuard,
    AdmGuard,
    AngularFireDatabase,
    AngularFireAuth,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
