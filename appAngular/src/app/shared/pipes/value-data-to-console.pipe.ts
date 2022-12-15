import {NgModule, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'valueDataToConsolePipe'
})
export class ValueDataToConsolePipe implements PipeTransform {

  transform(object: any): any {
    if (object) {
      console.log('------ Imprimir Chaves -------');
      for (let x in object) {
        console.log("Chave: ", x, ", Valor:", object[x]);
      }
    }
    return null;
  }

}

@NgModule({
  imports: [
  ],
  declarations: [ ValueDataToConsolePipe ],
  exports: [ ValueDataToConsolePipe ]
})
export class FirstKeysToConsoleModule { }
