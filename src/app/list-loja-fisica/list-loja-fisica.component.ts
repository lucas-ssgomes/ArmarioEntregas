import { LojaFisica } from './../models/lojaFisica';
import { Component, OnInit } from '@angular/core';
import { DbService } from '../servicos/db.service';

@Component({
  selector: 'app-list-loja-fisica',
  templateUrl: './list-loja-fisica.component.html',
  styleUrls: ['./list-loja-fisica.component.css'],
  providers: [DbService],
})
export class ListLojaFisicaComponent implements OnInit {
  lojasFisicas: LojaFisica[];
  carregando: boolean;

  constructor(private database: DbService) {
    this.carregarLojaFisica();
  }

  ngOnInit() { }

  private carregarLojaFisica() {
    this.carregando = true;
    this.database.listar<LojaFisica>('lojasFisicas')
      .then(lojasFisicasDB => {
        this.lojasFisicas = lojasFisicasDB;
        this.carregando = false;
      });
  }

  remover(eid: string) {
    this.database.remover('lojasFisicas', eid)
      .then(() => {
        this.carregarLojaFisica();
        alert('Loja Física Removida com Sucesso');
      });
  }

  editar(lojaFisica) {
    lojaFisica.editando = true;
  }

  cancelEdit(lojaFisica) {
    lojaFisica.editando = false;
  }

  confirmEdit(lojaFisica) {
    this.database.atualizar('lojasFisicas', lojaFisica.eid, {
      nomeFantasia: lojaFisica.nomeFantasia, nomeCompleto: lojaFisica.nomeCompleto,
      email: lojaFisica.email, senha: lojaFisica.senha, cnpj: lojaFisica.cnpj,
      endereco: lojaFisica.endereco, telefone: lojaFisica.telefone
    })
      .then(() => {
        this.carregarLojaFisica();
        alert('Loja Física Atualizada com Sucesso');
      });
  }
}
