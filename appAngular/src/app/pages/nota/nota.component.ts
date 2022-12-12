import { Component } from '@angular/core';
import {lastValueFrom} from "rxjs";
import {Nota} from "../../models/nota";
import {NotaService} from "../../shared/services/nota.service";
import {Cliente} from "../../models/cliente";
import {ClienteService} from "../../shared/services/cliente.service";
import {Item} from "../../models/item";

@Component({
  selector: 'app-cliente',
  templateUrl: 'nota.component.html',
  styleUrls: [ './nota.component.scss' ]
})

export class NotaComponent {

  notas: Nota[] = [];
  carregando = false;
  clientes: Cliente[] = [];
  itens: Item[] = [];

  constructor(private notaService: NotaService,
              private clienteService: ClienteService) {

  }

  ngOnInit(){
    this.notaService.getNota().subscribe((n)=>{
      this.notas = n;
    })
    this.clienteService.getCliente().subscribe((c)=>{
      this.clientes = c;
    })
    this.notaService.getItem().subscribe((i)=>{
      this.itens = i;
    })
  }

  async onSaved(e: any) {
    console.log("onSaving");
    if(e.changes && e.changes.length > 0){
      for (let i of e.changes) {
        if (i.type === 'insert'){
          e.promisse = await this.adicionaNota(i.data as Nota);
        }
        else if (i.type === 'update'){
          console.log("Atualizado");
          let nota$ = await this.notaService.putNota(i.data as Nota);
          e.promisse = lastValueFrom(nota$);
        }
        else if (i.type === 'remove'){
          console.log("Deletado");
          e.promisse = await this.excluiNota(i.key.id);
        }
      }
    }


  }

  async adicionaNota(data: Nota) {
    this.carregando = true;
    let nota: Nota = new Nota();
    try {
      let nota$ = this.notaService.postNota(data);
      return await lastValueFrom(nota$);
    } finally {
      this.carregando = false;
    }
    return nota;
  }

  async excluiNota(id: number) {
    this.carregando = true;
    try {
      let nota$ = this.notaService.deleteNota(id);
      return await lastValueFrom(nota$);
    } finally {
      this.carregando = false;
    }
  }

}
