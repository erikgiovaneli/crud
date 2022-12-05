import { Component, OnInit } from '@angular/core';
import {ClienteService} from "../../shared/services/cliente.service";
import {Cliente} from "../../models/cliente";
import {lastValueFrom} from "rxjs";
import DevExpress from "devextreme";
import applyChanges = DevExpress.data.applyChanges;

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

  /*onInitNewRow(e: any) {
    console.log("OnInitNewRow");
  }
  onRowInserted(e: any) {
    console.log("onRowInserted");
  }
  onRowInserting(e: any) {
    console.log("onRowInserting");
  }
  onRowRemoved(e: any) {
    console.log("onRowRemoved");
  }
  onRowRemoving(e: any) {
    console.log("onRowRemoving");
  }
  onRowUpdated(e: any) {
    console.log("OnRowUpdated");
  }
  onRowUpdating(e: any) {
    console.log("onRowUpdating");
  }
  onSaved(e: any) {
    console.log("onSaved");
  }*/

  async onSaving(e: any) {
    console.log("onSaving");
    if(e.changes && e.changes.length > 0){
      for (let i of e.changes) {
        if (i.type === 'insert'){
          e.promisse = await this.adicionaCliente(i.data as Cliente);
        }
        else if (i.type === 'update'){
          console.log("Atualizado");
          //e.promisse = await this.atualizaCliente(i.data as Cliente);
        }
        else if (i.type === 'remove'){
          console.log("Deletado");
          e.promisse = await this.excluiCliente(i.key.id);
        }
      }
    }


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

  async atualizaCliente(data: Cliente) {
    this.carregando = true;
    let cliente: Cliente = new Cliente();
    try {
      let cliente$ = this.ClienteService.putCliente(data);
      return await lastValueFrom(cliente$);
    } finally {
      this.carregando = false;
    }
    return cliente;
  }

}
