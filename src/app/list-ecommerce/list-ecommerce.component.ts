import { Component, OnInit } from '@angular/core';
import { Ecommerce } from '../models/ecommerce';
import { DbService } from '../servicos/db.service';

@Component({
  selector: 'app-list-ecommerce',
  templateUrl: './list-ecommerce.component.html',
  styleUrls: ['./list-ecommerce.component.css'],
  providers: [DbService],
})
export class ListEcommerceComponent implements OnInit {
  ecommerces: Ecommerce[];
  carregando: boolean;

  constructor(private database: DbService) {
    this.carregarEcommerce();
   }

  ngOnInit() { }

  private carregarEcommerce() {
    this.carregando = true;
    this.database.listar<Ecommerce>('ecommerces')
      .then(ecommercesDB => {
        this.ecommerces = ecommercesDB;
        this.carregando = false;
      });
  }

  remover(eid: string) {
    this.database.remover('ecommerces', eid)
      .then(() => {
        this.carregarEcommerce();
        alert('E-commerce removido com Sucesso');
      });
  }

  editar(ecommerce) {
    ecommerce.editando = true;
  }

  cancelEdit(ecommerce) {
    ecommerce.editando = false;
  }

  confirmEdit(ecommerce) {
    this.database.atualizar('ecommerces', ecommerce.eid, {
      nomeFantasia: ecommerce.nomeFantasia, nomeCompleto: ecommerce.nomeCompleto, email: ecommerce.email,
      senha: ecommerce.senha, cpfCnpj: ecommerce.cpfCnpj, site: ecommerce.site,
      endereco: ecommerce.endereco, telefone: ecommerce.telefone})
    .then(() => {
      this.carregarEcommerce();
      alert('E-commerce Atualizado com Sucesso');
    });
  }

}
