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
    this.clienteService.getCliente().subscribe((clientes)=>{
      for (let c of clientes) {
        this.clientes.push(c as Cliente);
      }

    })
    this.notaService.getItem().subscribe((i)=>{
      this.itens = i;
    })
  }

  async onSaved(e: any) {
    console.log("onSaved");
    if(e.changes && e.changes.length > 0){
      for (let item of e.changes) {
        if (item.type === 'insert'){
          e.promisse = await this.adicionaNota(item.data as Nota);
        }
        else if (item.type === 'update'){
          console.log("Atualizado");
          // let nota$ = await this.notaService.putNota(item.data as Nota);
          // e.promisse = lastValueFrom(nota$);
        }
        else if (item.type === 'remove'){
          console.log("Deletado");
          e.promisse = await this.excluiNota(item.key.id);
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

  getValorClienteGrid(id: number, data: any) {
    for (let c of this.clientes) {
      if(c.id==id){
        data.setValue(c as Cliente);
        break;
      }
    }

  }
}
