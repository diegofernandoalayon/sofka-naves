import { TipoNave } from './enums';
//archivo para definir interfaces y typos

export interface INaves{
  nombre: string
  peso: number
  empuje: number
  tipo: TipoNave
  combustible: string
  velocidadMax: number
  despegar(): string
  aterrizar(): string
}
export interface INaveLanzadera extends INaves{
  capCarga: number
  cantPropulsores: number
}

export interface INaveTripulada extends INaves{
  capPasajeros: number
}
export interface INaveNoTripulada extends INaves{
  altitud: number
  puedeAterrizar: boolean
}