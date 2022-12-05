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
    return this.http.get<Cliente[]>("/api/cliente");
  }

  postCliente(dados: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>('/api/cliente', dados);
  }

  deleteCliente(id: number): Observable<any>{
    return this.http.delete<any>('/api/cliente/' + id);
  }

  putCliente(dados: Cliente): Observable<any> {
    return this.http.put<Cliente>('/api/cliente', dados);
  }
}

