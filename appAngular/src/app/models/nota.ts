import {Cliente} from "./cliente";
import {Item} from "./item";

export class Nota {
  id: number | undefined;
  numero: number | undefined;
  dataCriacao: Date | undefined;
  nome: Cliente | undefined;
  itens: Item[] | undefined;
}
