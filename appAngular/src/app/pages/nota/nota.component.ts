import { Component } from '@angular/core';
import {lastValueFrom} from "rxjs";
import {Nota} from "../../models/nota";
import {NotaService} from "../../shared/services/nota.service";
import {Cliente} from "../../models/cliente";

@Component({
  selector: 'app-cliente',
  templateUrl: 'nota.component.html',
  styleUrls: [ './nota.component.scss' ]
})

export class NotaComponent {
  nota: Nota[] = [];
  carregando = false;

  constructor(private NotaService: NotaService) {

  }

  ngOnInit(){
    this.NotaService.getNota().subscribe((n)=>{
      this.nota = n;
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
          let nota$ = await this.NotaService.putNota(i.data as Nota);
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
      let nota$ = this.NotaService.postNota(data);
      return await lastValueFrom(nota$);
    } finally {
      this.carregando = false;
    }
    return nota;
  }

  async excluiNota(id: number) {
    this.carregando = true;
    try {
      let nota$ = this.NotaService.deleteNota(id);
      return await lastValueFrom(nota$);
    } finally {
      this.carregando = false;
    }
  }

}
