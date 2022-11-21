import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produto} from "../../models/produto";

@Injectable()
export class ProdutoService {

  constructor(private http: HttpClient) {
  }

  getProduto(): Observable<Produto[]> {
    return this.http.get<Produto[]>("/api/Produto");
  }

  /*postProduto(dados: Produto): Observable<Produto> {
    return this.http.post<Produto>('/api/Produto', dados);
  }*/

}

