import { Component, OnInit } from '@angular/core';
import * as M from '../../assets/materialize/js/materialize.min.js';

@Component({
  selector: 'app-menu-cliente',
  templateUrl: './menu-cliente.component.html',
  styleUrls: ['./menu-cliente.component.css']
})
export class MenuClienteComponent implements OnInit {

  constructor() { }

  options = {};

  ngOnInit(): void {
    // Seletor do Tabs
    const el = document.querySelectorAll('.tabs');
    const instance = M.Tabs.init(el, this.options);

    // Menu Mobile
    const elems = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(elems, this.options);
  }

}
