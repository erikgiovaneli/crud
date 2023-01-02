import {Produto} from "./produto";
import {Nota} from "./nota";

export class Item{
  id: number | undefined;
  nota: Nota | undefined;
  numero: number | undefined;
  produto: Produto | undefined;
  quantidade: number | undefined;
  valorItem: number | undefined;
}
