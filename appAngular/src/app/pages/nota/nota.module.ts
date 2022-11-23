import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {DevExtremeModule} from "devextreme-angular";
import {NotaComponent} from "./nota.component";



@NgModule({
  declarations: [NotaComponent],
  exports: [
    NotaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DevExtremeModule
  ]
})
export class NotaModule { }
