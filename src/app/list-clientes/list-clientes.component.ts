import { Component, OnInit } from '@angular/core';
import { DbService } from '../servicos/db.service';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.css'],
  providers: [DbService]
})
export class ListClientesComponent implements OnInit {
  clientes: Cliente[];
  carregando: boolean;

  constructor(private database: DbService) {
    this.carregarClientes();
  }

  ngOnInit() {
  }

  private carregarClientes() {
    this.carregando = true;
    this.database.listar<Cliente>('clientes')
      .then(clientesDB => {
        this.clientes = clientesDB;
        this.carregando = false;
      });
  }

  remover(eid: string) {
    this.database.remover('clientes', eid)
      .then(() => {
        alert('Cliente removido com sucesso');
        this.carregarClientes();
      });
  }

  editar(cliente) {
    cliente.editando = true;
  }

  cancelEdit(cliente) {
    cliente.editando = false;
  }

  confirmEdit(cliente) {
    this.database.atualizar('clientes', cliente.eid, {
        nome: cliente.nome, sobrenome: cliente.sobrenome, email: cliente.email,
        senha: cliente.senha, cpf: cliente.cpf, endereco: cliente.endereco, telefone: cliente.telefone })
      .then(() => {
        alert('Cliente atualizado com sucesso');
        this.carregarClientes();
      });
  }

}
