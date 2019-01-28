import { Component, OnInit } from '@angular/core';
import * as M from '../../assets/materialize/js/materialize.min.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  options = {};
  options2 = {
    fullWidth: true,
    indicators: true,
    duration: 100,
  };

  ngOnInit(): void {
    // Seletor do Tabs
    const el = document.querySelectorAll('.tabs');
    const instance = M.Tabs.init(el, this.options);

    // Menu Mobile
    const elems = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(elems, this.options);

    // Carousel
    const element2 = document.querySelectorAll('.carousel');
    const instance2 = M.Carousel.init(element2, this.options2);
  }
}
