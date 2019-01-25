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
import { ListClientesComponent } from './list-clientes/list-clientes.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ListEcommerceComponent } from './list-ecommerce/list-ecommerce.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ListClientesComponent,
    EcommerceComponent,
    ListEcommerceComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      { path: 'cliente', component: ClienteComponent },
      { path: 'listClientes', component: ListClientesComponent },
      { path: 'ecommerce', component: EcommerceComponent },
      {path: 'listEcommerce', component: ListClientesComponent},
    ])
  ],
  providers: [DbService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
