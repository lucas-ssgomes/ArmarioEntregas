import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { DbService } from '../servicos/db.service';

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

  constructor(private database: DbService) {
    this.novoCliente = new Cliente();
    this.carregarUsuarios();
  }

  ngOnInit() { }

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
        alert('Cliente cadastrado com sucesso');
        this.novoCliente = new Cliente();
        this.carregarUsuarios();
      });
  }

  remover(eid: string) {
    this.database.remover('clientes', eid)
      .then(() => {
        alert('Cliente cadastrado com sucesso');
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
