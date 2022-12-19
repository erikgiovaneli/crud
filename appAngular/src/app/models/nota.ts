import {Cliente} from "./cliente";
import {Item} from "./item";

export class Nota {
  id!: number;
  numero!: string;
  dataCriacao!: Date;
  cliente!: Cliente;
  itens!: Item[];
}
