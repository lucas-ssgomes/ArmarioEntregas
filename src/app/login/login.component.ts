import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import * as M from '../../assets/materialize/js/materialize.min.js';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

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

  onLoginGoogle() {
    this.afAuth.auth.signInWithPopup( new auth.GoogleAuthProvider());
    this.router.navigate(['menuCliente']);
  }

  onLogout() {
    this.afAuth.auth.signOut();
  }
}
