import { Component } from '@angular/core';
import 'devextreme/data/odata/store';
import {Produto} from "../../models/produto";
import {ProdutoService} from "../../shared/services/produto.service";

@Component({
  selector: 'app-cliente',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
  providers: [ProdutoService],
})

export class ProdutoComponent {

  produto: Produto[] = [];

  constructor(private service: ProdutoService) {
  }

  ngOnInit(){
    this.service.getProduto().subscribe((p)=> {
      this.produto = p;
    })


  }

}
