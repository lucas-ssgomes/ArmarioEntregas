import { Ecommerce } from './../models/ecommerce';
import { Component, OnInit } from '@angular/core';
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

  constructor(private database: DbService) {
    this.novoEcommerce = new Ecommerce();
    this.carregarUsuarios();
   }

  ngOnInit() { }

  private carregarUsuarios() {
    this.carregando = true;
    this.database.listar<Ecommerce>('ecommerces')
    .then (ecommercesDB => {
      this.ecommerces = ecommercesDB;
      this.carregando = false;
    });
  }

  cadastrar() {
    this.database.inserir('ecommerces', this.novoEcommerce)
      .then(() => {
        this.novoEcommerce = new Ecommerce();
        this.carregarUsuarios();
        alert('E-commerce Cadastrado com Sucesso');
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
