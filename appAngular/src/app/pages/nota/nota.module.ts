import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {DevExtremeModule} from "devextreme-angular";
import {NotaComponent} from "./nota.component";
import {FirstKeysToConsoleModule} from "../../shared/pipes/value-data-to-console.pipe";



@NgModule({
  declarations: [NotaComponent],
  exports: [
    NotaComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        DevExtremeModule,
        FirstKeysToConsoleModule
    ]
})
export class NotaModule { }
