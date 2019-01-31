import { Component, OnInit } from '@angular/core';
import * as M from '../../assets/materialize/js/materialize.min.js';

import { AuthService } from '../servicos/auth.service.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-loja-fisica',
  templateUrl: './login-loja-fisica.component.html',
  styleUrls: ['./login-loja-fisica.component.css'],
  providers: [AuthService]
})
export class LoginLojaFisicaComponent implements OnInit {

  public email: string;
  public senha: string;

  constructor(public authService: AuthService, private router: Router) { }

  options = {
    coverTrigger: false
   };

  ngOnInit(): void {
    // Dropdown
    const elems2 = document.querySelectorAll('.dropdown-trigger');
    const instances2 = M.Dropdown.init(elems2, this.options);
  }

  onLogin(): void {
    console.log('email', this.email);
    console.log('senha', this.senha);
    this.authService.loginEmail(this.email, this.senha)
      .then((res) => {
        this.router.navigate(['menuLojaFisica']);
      }).catch(err => console.log('err', err.message));
  }

}
