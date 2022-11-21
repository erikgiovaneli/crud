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

  constructor(private service: ClienteService) {
  }

  ngOnInit(){
    this.service.getCliente().subscribe((c)=>{
      this.cliente = c;
    })
  }

  oninitNewRow(e: any) {
    console.log("OnInitNewRow")
  }
}
