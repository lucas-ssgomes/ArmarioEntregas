import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { DbService } from '../servicos/db.service';
import * as M from '../../assets/materialize/js/materialize.min.js';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  providers: [DbService]
})
export class ClienteComponent implements OnInit {
  novoCliente: Cliente;
  clientes: Cliente[];
  carregando: boolean;
  options = {};

  constructor(private database: DbService) {
    this.novoCliente = new Cliente();
    this.carregarUsuarios();
  }

  ngOnInit(): void {
    // Menu Mobile
    const elems = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(elems, this.options);
  }

  private carregarUsuarios() {
    this.carregando = true;
    this.database.listar<Cliente>('clientes')
      .then(clientesDB => {
        this.clientes = clientesDB;
        this.carregando = false;
      });
  }

  cadastrar() {
    this.database.inserir('clientes', this.novoCliente)
      .then(() => {
        this.novoCliente = new Cliente();
        this.carregarUsuarios();
        alert('Cliente cadastrado com sucesso');
      });
  }

  remover(eid: string) {
    this.database.remover('clientes', eid)
      .then(() => {
        alert('Cliente removido com sucesso');
        this.carregarUsuarios();
      });
  }

  editar(cliente) {
    cliente.editando = true;
  }

  cancelEdit(cliente) {
    cliente.editando = false;
  }

  confirmEdit(cliente: Cliente) {
    this.database.atualizar('clientes', cliente.id, {
      nome: cliente.nome, cnpj: cliente.sobrenome, email: cliente.email,
      senha: cliente.senha, cpf: cliente.cpf, endereco: cliente.endereco, telefone: cliente.telefone
    })
      .then(() => {
        alert('Cliente atualizado com sucesso');
        this.carregarUsuarios();
      });
  }
}
