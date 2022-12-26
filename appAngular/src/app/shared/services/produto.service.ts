import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produto} from "../../models/produto";

@Injectable()
export class ProdutoService {

  constructor(private http: HttpClient) {
  }

  getProduto(): Observable<Produto[]> {
    return this.http.get<Produto[]>("/api/produto");
  }

  postProduto(dados: Produto): Observable<Produto> {
    return this.http.post<Produto>('/api/produto', dados);
  }

  deleteProduto(id: number): Observable<any>{
    return this.http.delete<any>('/api/produto/' + id);
  }

  putProduto(dados: Produto): Observable<Produto> {
    return this.http.put<Produto>('/api/produto', dados);
  }

}

