import { auth } from 'firebase/app';
import * as M from '../../assets/materialize/js/materialize.min.js';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from './../servicos/auth.service';

@Component({
  selector: 'app-menu-cliente',
  templateUrl: './menu-cliente.component.html',
  styleUrls: ['./menu-cliente.component.css'],
  providers: [AuthService]
})
export class MenuClienteComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  options = {};

  ngOnInit(): void {
    // Seletor do Tabs
    const el = document.querySelectorAll('.tabs');
    const instance = M.Tabs.init(el, this.options);

    // Menu Mobile
    const elems = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(elems, this.options);
  }

  logOut() {
    this.authService.logOut();
    this.router.navigate(['']);
  }

}
