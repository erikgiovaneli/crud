import { Component, OnInit } from '@angular/core';
import {ClienteService} from "../../shared/services/cliente.service";
import {Cliente} from "../../models/cliente";

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

  async adicionaCliente(data: Cliente) {
    this.carregando = true;

    try {
      await this.ClienteService.postCliente(data);
    } finally {
      this.carregando = false;
    }
  }

  onInitNewRow(e: any) {
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
  }
  onSaving(e: any) {
    console.log("onSaving");
    const change = e.changes[0];
    if(e.change && e.change.size > 0){
      if (e.change.type === 'insert'){
        console.log("Inserido");
      }
      else if (e.change.type === 'update'){
        console.log("Atualizado");
      }
      else if (e.change.type === 'remove'){
        console.log("Deletado");
      }
    }


  }
}
