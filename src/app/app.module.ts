import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import { ClienteComponent } from './cliente/cliente.component';
import { DbService } from './servicos/db.service';
import 'materialize-css';
// import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { ListClientesComponent } from './list-clientes/list-clientes.component';


@NgModule({
  declarations: [
    AppComponent,
    // PaginaInicialComponent,
    ClienteComponent,
    ListClientesComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      { path: 'cliente', component: ClienteComponent },
      { path: 'listClientes', component: ListClientesComponent }
    ])
  ],
  providers: [DbService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
