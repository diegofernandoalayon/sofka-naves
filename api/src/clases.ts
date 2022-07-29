import { INaves } from "./type";
import { TipoNave } from "./enums";


export class Nave implements INaves {
  nombre: string
  peso: number
  empuje: number
  tipo: TipoNave
  combustible: string
  velocidadMax: number

  constructor(nombre:string, peso: number,empuje: number, tipo: TipoNave, combustible: string, velocidadMax: number  ){
    this.nombre = nombre
    this.peso = peso
    this.empuje = empuje
    this.tipo = tipo
    this.combustible = combustible
    this.velocidadMax = velocidadMax
  }
}