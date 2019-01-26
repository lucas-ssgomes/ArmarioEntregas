import { LojaFisica } from './../models/lojaFisica';
import { Component, OnInit } from '@angular/core';
import { DbService } from '../servicos/db.service';
import { Ecommerce } from '../models/ecommerce';

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

  constructor(private database: DbService) {
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

  cadastrar() {
    this.database.inserir('lojasFisicas', this.novaLojaFisica)
      .then(() => {
        this.novaLojaFisica = new LojaFisica();
        this.carregarUsuarios();
        alert('Loja Física Cadastrada com Sucesso');
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
