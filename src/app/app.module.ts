import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {environment} from '../environments/environment';
import { RouterModule } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import { ClienteComponent } from './cliente/cliente.component';
import { DbService } from './servicos/db.service';
import 'materialize-css';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';



@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    PaginaInicialComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      { path: 'cliente', component: ClienteComponent }
    ])
  ],
  providers: [DbService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
