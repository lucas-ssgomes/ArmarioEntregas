import * as M from '../../assets/materialize/js/materialize.min.js';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { Ecommerce } from './../models/ecommerce';
import { DbService } from '../servicos/db.service';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css'],
  providers: [DbService],
})
export class EcommerceComponent implements OnInit {
  novoEcommerce: Ecommerce;
  ecommerces: Ecommerce[];
  carregando: boolean;
  options = {};

  constructor(private database: DbService, private afAuth: AngularFireAuth, private router: Router) {
    this.novoEcommerce = new Ecommerce();
    this.carregarUsuarios();
   }

  ngOnInit(): void {
    // Menu Mobile
    const elems = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(elems, this.options);
   }

  private carregarUsuarios() {
    this.carregando = true;
    this.database.listar<Ecommerce>('ecommerces')
    .then (ecommercesDB => {
      this.ecommerces = ecommercesDB;
      this.carregando = false;
    });
  }

  cadastrar(email: string, senha: string) {
    return new Promise((resolve, reject) => {
    this.afAuth.auth.createUserWithEmailAndPassword(this.novoEcommerce.email, this.novoEcommerce.senha);
    this.database.inserir('ecommerces', this.novoEcommerce)
      .then(userData => {
        resolve(userData);
        this.novoEcommerce = new Ecommerce();
        this.carregarUsuarios();
        this.router.navigate(['loginEcommerce']);
        alert('E-commerce cadastrado com sucesso');
      },
      err => reject (alert('err')));
    });
  }

  remover(eid: string) {
    this.database.remover('ecommerces', eid)
      .then(() => {
        this.carregarUsuarios();
        alert('E-commerce Removido com Sucesso');
      });
  }

  editar(ecommerce) {
    ecommerce.editando = true;
  }

  cancelEdit(ecommerce) {
    ecommerce.editando = false;
  }

  confirmEdit(ecommerce: Ecommerce) {
    this.database.atualizar('ecommerces', ecommerce.id, {
      nomeFantasia: ecommerce.nomeFantasia, nomeCompleto: ecommerce.nomeCompleto, email: ecommerce.email,
      senha: ecommerce.senha, cpfCnpj: ecommerce.cpfCnpj, site: ecommerce.site,
      endereco: ecommerce.endereco, telefone: ecommerce.telefone
    })
      .then(() => {
        this.carregarUsuarios();
        alert('E-commerce Atualizado com Sucesso');
      });
  }
}
