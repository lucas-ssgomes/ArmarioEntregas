import { Component, OnInit } from '@angular/core';
import * as M from '../../assets/materialize/js/materialize.min.js';

import { AuthService } from '../servicos/auth.service.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-ecommerce',
  templateUrl: './login-ecommerce.component.html',
  styleUrls: ['./login-ecommerce.component.css'],
  providers: [AuthService]
})
export class LoginEcommerceComponent implements OnInit {

  public email: string;
  public senha: string;

  constructor(public authService: AuthService, private router: Router) { }

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
        this.router.navigate(['menuEcommerce']);
      }).catch(err => console.log('err', err.message));
  }

}
