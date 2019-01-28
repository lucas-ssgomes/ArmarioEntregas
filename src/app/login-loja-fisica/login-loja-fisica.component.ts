import { Component, OnInit } from '@angular/core';
import * as M from '../../assets/materialize/js/materialize.min.js';

@Component({
  selector: 'app-login-loja-fisica',
  templateUrl: './login-loja-fisica.component.html',
  styleUrls: ['./login-loja-fisica.component.css']
})
export class LoginLojaFisicaComponent implements OnInit {

  constructor() { }

  options = {
    coverTrigger: false
   };

  ngOnInit(): void {
    // Dropdown
    const elems2 = document.querySelectorAll('.dropdown-trigger');
    const instances2 = M.Dropdown.init(elems2, this.options);
  }

}
