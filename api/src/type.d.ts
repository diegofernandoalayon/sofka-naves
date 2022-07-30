import { TipoNave } from './enums';
//archivo para definir interfaces y typos

type TNave = {
  nombre: string
  peso: number
  empuje: number
  tipo: TipoNave
  combustible: string
  velocidadMax: number
  procedencia: string
}
export type TNaveLanzadera = Omit<INaveLanzadera, 'despegar' |'aterrizar'>
export type TNaveTripulada = Omit<INaveTripulada, 'despegar' | 'aterrizar'>
export type TNaveNoTripulada = Omit<INaveNoTripulada, 'despegar' | 'aterrizar'>
export interface INaves extends TNave{
  // nombre: string
  // peso: number
  // empuje: number
  // tipo: TipoNave
  // combustible: string
  // velocidadMax: number
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