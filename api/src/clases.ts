import { INaves } from "./type";
import { TipoNave } from "./enums";


class Nave implements INaves {
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
  despegar(): string {
    return 'despegando'
  }
  aterrizar(): string {
    return 'aterrizando'
  }
}

export class NaveLanzadera extends Nave{
  capCarga: number
  cantPropulsores: number
  constructor(
    nombre: string, 
    peso: number,
    empuje: number,
    tipo: TipoNave,
    combustible: string,
    velocidadMax: number,
    capCarga: number, 
    cantPropulsores: number
    ){
      super(nombre, peso, empuje, tipo, combustible, velocidadMax)
      this.capCarga = capCarga
      this.cantPropulsores = cantPropulsores 
  }
}

export class NaveTripulada extends Nave{
  capPasajeros : number
  constructor(
    nombre: string, 
    peso: number,
    empuje: number,
    tipo: TipoNave,
    combustible: string,
    velocidadMax: number,
    capPasajeros: number
  ){
    super(nombre, peso, empuje, tipo, combustible, velocidadMax)
    this.capPasajeros = capPasajeros

  }

}

export class NaveNoTripulada extends Nave {
  altitud: number
  puedeAterrizar: boolean
  constructor(
    nombre: string, 
    peso: number,
    empuje: number,
    tipo: TipoNave,
    combustible: string,
    velocidadMax: number,
    altitud: number,
    puedeAterrizar: boolean
  ){
    super(nombre, peso, empuje, tipo, combustible, velocidadMax)
    this.altitud = altitud
    this.puedeAterrizar = puedeAterrizar
}
}

