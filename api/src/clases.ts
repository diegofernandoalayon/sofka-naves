import { INaves, INaveLanzadera, INaveTripulada, INaveNoTripulada } from "./type";
import { TipoNave } from "./enums";


class Nave implements INaves {
  nombre: string
  peso: number
  empuje: number
  tipo: TipoNave
  combustible: string
  velocidadMax: number
  procedencia: string

  constructor(nombre:string, peso: number,empuje: number, tipo: TipoNave, combustible: string, velocidadMax: number, procedencia: string  ){
    this.nombre = nombre
    this.peso = peso
    this.empuje = empuje
    this.tipo = tipo
    this.combustible = combustible
    this.velocidadMax = velocidadMax
    this.procedencia = procedencia
  }
  despegar(): string {
    return 'despegando'
  }
  aterrizar(): string {
    return 'aterrizando'
  }
}

export class NaveLanzadera extends Nave implements INaveLanzadera {
  capCarga: number
  cantPropulsores: number
  constructor(
    nombre: string, 
    peso: number,
    empuje: number,
    tipo: TipoNave,
    combustible: string,
    velocidadMax: number,
    procedencia: string,
    capCarga: number, 
    cantPropulsores: number
    ){
      super(nombre, peso, empuje, tipo, combustible, velocidadMax, procedencia)
      this.capCarga = capCarga
      this.cantPropulsores = cantPropulsores 
  }
}

export class NaveTripulada extends Nave implements INaveTripulada{
  capPasajeros : number
  constructor(
    nombre: string, 
    peso: number,
    empuje: number,
    tipo: TipoNave,
    combustible: string,
    velocidadMax: number,
    procedencia: string,
    capPasajeros: number
  ){
    super(nombre, peso, empuje, tipo, combustible, velocidadMax, procedencia)
    this.capPasajeros = capPasajeros

  }

}

export class NaveNoTripulada extends Nave implements INaveNoTripulada{
  altitud: number
  puedeAterrizar: boolean
  constructor(
    nombre: string, 
    peso: number,
    empuje: number,
    tipo: TipoNave,
    combustible: string,
    velocidadMax: number,
    procedencia: string,
    altitud: number,
    puedeAterrizar: boolean
  ){
    super(nombre, peso, empuje, tipo, combustible, velocidadMax, procedencia)
    this.altitud = altitud
    this.puedeAterrizar = puedeAterrizar
}
}

