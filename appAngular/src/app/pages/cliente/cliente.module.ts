import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {ClienteComponent} from "./cliente.component";
import {DevExtremeModule} from "devextreme-angular";



@NgModule({
  declarations: [ClienteComponent],
  exports: [
    ClienteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DevExtremeModule
  ]
})
export class ClienteModule { }
