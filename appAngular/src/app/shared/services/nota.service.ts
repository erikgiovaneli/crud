import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Nota} from "../../models/nota";
import {Cliente} from "../../models/cliente";

@Injectable()
export class NotaService {

  constructor(private http: HttpClient) {
  }

  getNota(): Observable<Nota[]> {
    return this.http.get<Nota[]>("/api/Nota");
  }

  postNota(dados: Nota): Observable<Nota> {
    return this.http.post<Nota>('/api/nota', dados);
  }

  deleteNota(id: number): Observable<any>{
    return this.http.delete<any>('/api/nota/' + id);
  }

}

