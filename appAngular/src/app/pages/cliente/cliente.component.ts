import { Component, OnInit } from '@angular/core';
import {ClienteService} from "../../shared/services/cliente.service";
import {Cliente} from "../../models/cliente";
import {lastValueFrom} from "rxjs";

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
  providers: [ClienteService],
})
export class ClienteComponent implements OnInit {

  cliente: Cliente[] = [];
  carregando = false;

  constructor(private ClienteService: ClienteService) {
  }

  ngOnInit(){
    this.ClienteService.getCliente().subscribe((c)=>{
      this.cliente = c;
    })
  }

  async onSaved(e: any) {
    console.log("onSaved");
    if(e.changes && e.changes.length > 0){
      for (let i of e.changes) {
        if (i.type === 'insert'){
          e.promisse = await this.adicionaCliente(i.data as Cliente);
        }
        else if (i.type === 'update'){
          let cliente$ = await this.ClienteService.putCliente(i.data as Cliente);
          e.promisse = lastValueFrom(cliente$);
        }
        else if (i.type === 'remove'){
          e.promisse = await this.excluiCliente(i.key.id);
        }
      }
    }
  }

  onSaving(e: any) {
    console.log("onSaving");
  }

  async adicionaCliente(data: Cliente) {
    this.carregando = true;
    let cliente: Cliente = new Cliente();
    try {
      let cliente$ = this.ClienteService.postCliente(data);
      return await lastValueFrom(cliente$);
    } finally {
      this.carregando = false;
    }
    return cliente;
  }

  async excluiCliente(id: number) {
    this.carregando = true;
    try {
      let cliente$ = this.ClienteService.deleteCliente(id);
      return await lastValueFrom(cliente$);
    } finally {
      this.carregando = false;
    }
  }

}
