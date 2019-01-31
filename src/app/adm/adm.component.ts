import * as M from '../../assets/materialize/js/materialize.min.js';
import { AuthAdmService } from './../servicos/auth-adm.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css'],
  providers: [AuthAdmService]
})
export class AdmComponent implements OnInit {

  public email: string;
  public senha: string;

  constructor(private authAdmService: AuthAdmService, private router: Router) { }

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
    this.authAdmService.loginEmail(this.email, this.senha)
      .then((res) => {
        this.router.navigate(['menuAdm']);
      }).catch(err => console.log('err', err.message));
  }


}
