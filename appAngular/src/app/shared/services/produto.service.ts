import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cliente} from "../../models/cliente";
import DevExpress from "devextreme";

@Injectable()
export class ClienteService {

  constructor(private http: HttpClient) {
  }

  getCliente(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>("/api/Cliente");
  }

  /*postCliente(dados: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>('/api/Cliente', dados);
  }*/

}

