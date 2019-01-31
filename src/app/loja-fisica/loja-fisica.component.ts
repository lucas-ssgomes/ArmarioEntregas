import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { LojaFisica } from './../models/lojaFisica';
import { DbService } from '../servicos/db.service';

@Component({
  selector: 'app-loja-fisica',
  templateUrl: './loja-fisica.component.html',
  styleUrls: ['./loja-fisica.component.css'],
  providers: [DbService]
})
export class LojaFisicaComponent implements OnInit {
  novaLojaFisica: LojaFisica;
  lojasFisicas: LojaFisica[];
  carregando: boolean;

  constructor(private database: DbService, private afAuth: AngularFireAuth, private router: Router) {
    this.novaLojaFisica = new LojaFisica();
    this.carregarUsuarios();
  }

  ngOnInit() { }

  private carregarUsuarios() {
    this.carregando = true;
    this.database.listar<LojaFisica>('lojasFisicas')
      .then (lojasFisicasDB => {
        this.lojasFisicas = lojasFisicasDB;
        this.carregando = false;
      });
  }

  cadastrar(email: string, senha: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(this.novaLojaFisica.email, this.novaLojaFisica.senha);
      this.database.inserir('lojasFisicas', this.novaLojaFisica)
        .then(userData => {
          resolve(userData);
          this.novaLojaFisica = new LojaFisica;
          this.carregarUsuarios();
          this.router.navigate(['loginLojaFisica']);
          alert('Loja Física cadastrada com sucesso');
        },
        err => reject (alert('err')));
    });
  }

  remover(eid: string) {
    this.database.remover('lojasFisicas', eid)
      .then (() => {
        this.carregarUsuarios();
        alert('Loja Física Removida com Sucesso');
      });
  }

  editar(lojaFisica) {
    lojaFisica.editando = true;
  }

  cancelEdit(lojaFisica) {
    lojaFisica.editando = false;
  }

  confirmEdit(lojaFisica: LojaFisica) {
    this.database.atualizar('lojasFisicas', lojaFisica.id, {
      nomeFantasia: lojaFisica.nomeFantasia, nomeCompleto: lojaFisica.nomeCompleto,
      email: lojaFisica.email, senha: lojaFisica.senha, cnpj: lojaFisica.cnpj,
      endereco: lojaFisica.endereco, telefone: lojaFisica.telefone
    })
      .then(() => {
        this.carregarUsuarios();
        alert('Loja Física Atualizada com Sucesso');
      });
  }
}
