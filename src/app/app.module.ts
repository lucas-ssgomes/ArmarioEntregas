import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';

// import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { DbService } from './servicos/db.service';
import { ClienteComponent } from './cliente/cliente.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { ListClientesComponent } from './list-clientes/list-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    ClienteComponent,
    ListClientesComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      { path: 'paginaInicial', component: PaginaInicialComponent },
      { path: 'cliente', component: ClienteComponent },
      { path: 'listClientes', component: ListClientesComponent },
    ])
  ],
  providers: [DbService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
