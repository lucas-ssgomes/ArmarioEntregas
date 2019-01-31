import * as M from '../../assets/materialize/js/materialize.min.js';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from './../servicos/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  // clientes: Cliente[];
  // carregando: boolean;

  public email: string;
  public senha: string;

  constructor(public authService: AuthService, private router: Router) {
  }

  options = {
    coverTrigger: false
  };

  ngOnInit(): void {
    // Menu Mobile
    const elems = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(elems, this.options);

    // Dropdown
    const elems2 = document.querySelectorAll('.dropdown-trigger');
    const instances2 = M.Dropdown.init(elems2, this.options);
  }

  onLogin(): void {
    console.log('email', this.email);
    console.log('senha', this.senha);
    this.authService.loginEmail(this.email, this.senha)
      .then((res) => {
        this.router.navigate(['menuCliente']);
      }).catch(err => console.log('err', err.message));
  }

  onLoginGoogle(): void {
    this.authService.loginGoogle()
      .then((res) => {
        console.log('resUser, res');
        this.router.navigate(['menuCliente']);
      }).catch(err => console.log('err', err.message));
  }

  onLogout() {
    this.authService.logOut();
    this.router.navigate(['']);
  }
}
