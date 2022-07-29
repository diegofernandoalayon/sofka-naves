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