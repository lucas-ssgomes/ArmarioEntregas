import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';

import { environment } from '../environments/environment';
import { DbService } from './servicos/db.service';
import { AppRoutingModule } from './app-routing.module';
import { ClienteComponent } from './cliente/cliente.component';
import { ListClientesComponent } from './list-clientes/list-clientes.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ListEcommerceComponent } from './list-ecommerce/list-ecommerce.component';
import { LojaFisicaComponent } from './loja-fisica/loja-fisica.component';
import { ListLojaFisicaComponent } from './list-loja-fisica/list-loja-fisica.component';


@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ListClientesComponent,
    EcommerceComponent,
    ListEcommerceComponent,
    LojaFisicaComponent,
    ListLojaFisicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [DbService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
