import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ClienteComponent } from './cliente/cliente.component';

const routes: Routes = [
  // { path: 'cliente', component: ClienteComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
