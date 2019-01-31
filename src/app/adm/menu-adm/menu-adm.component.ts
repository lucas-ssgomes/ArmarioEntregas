import * as M from '../../../assets/materialize/js/materialize.min.js';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-adm',
  templateUrl: './menu-adm.component.html',
  styleUrls: ['./menu-adm.component.css']
})
export class MenuAdmComponent implements OnInit {

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
