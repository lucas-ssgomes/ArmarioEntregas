import { Component, OnInit } from '@angular/core';
import * as M from '../../assets/materialize/js/materialize.min.js';

@Component({
  selector: 'app-login-ecommerce',
  templateUrl: './login-ecommerce.component.html',
  styleUrls: ['./login-ecommerce.component.css']
})
export class LoginEcommerceComponent implements OnInit {

  constructor() { }

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

}
