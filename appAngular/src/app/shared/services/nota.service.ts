import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Nota} from "../../models/nota";

@Injectable()
export class NotaService {

  constructor(private http: HttpClient) {
  }

  getNota(): Observable<Nota[]> {
    return this.http.get<Nota[]>("/api/Nota");
  }

  /*postNota(dados: Nota): Observable<Nota> {
    return this.http.post<Nota>('/api/Nota', dados);
  }*/

}

