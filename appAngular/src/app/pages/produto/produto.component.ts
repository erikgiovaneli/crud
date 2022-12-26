import { Component } from '@angular/core';
import 'devextreme/data/odata/store';
import {Produto} from "../../models/produto";
import {ProdutoService} from "../../shared/services/produto.service";
import {Cliente} from "../../models/cliente";
import {lastValueFrom} from "rxjs";

@Component({
  selector: 'app-cliente',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
  providers: [ProdutoService],
})

export class ProdutoComponent {

  produto: Produto[] = [];
  carregando = false;

  constructor(private ProdutoService: ProdutoService) {
  }

  ngOnInit(){
    this.ProdutoService.getProduto().subscribe((p)=> {
      this.produto = p;
    })
  }

  async onSaving(e: any) {
    console.log("onSaving");
    if(e.changes && e.changes.length > 0){
      for (let i of e.changes) {
        if (i.type === 'insert'){
          e.promisse = await this.adicionaProduto(i.data as Produto);
        }
        else if (i.type === 'update'){
          let produto$ = await this.ProdutoService.putProduto(i.data as Produto);
          e.promisse = lastValueFrom(produto$);
        }
        else if (i.type === 'remove'){
          e.promisse = await this.excluiProduto(i.key.id);
        }
      }
    }


  }

  async adicionaProduto(data: Produto) {
    this.carregando = true;
    let produto: Produto = new Produto();
    try {
      let produto$ = this.ProdutoService.postProduto(data);
      return await lastValueFrom(produto$);
    } finally {
      this.carregando = false;
    }
    return produto;
  }

  async excluiProduto(id: number) {
    this.carregando = true;
    try {
      let produto$ = this.ProdutoService.deleteProduto(id);
      return await lastValueFrom(produto$);
    } finally {
      this.carregando = false;
    }
  }

}
