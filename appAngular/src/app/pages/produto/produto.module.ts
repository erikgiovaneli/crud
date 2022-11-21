import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {DevExtremeModule} from "devextreme-angular";
import {ProdutoComponent} from "./produto.component";



@NgModule({
  declarations: [ProdutoComponent],
  exports: [
    ProdutoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DevExtremeModule
  ]
})
export class ProdutoModule { }
