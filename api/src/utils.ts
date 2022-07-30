import { TNaveLanzadera, TNaveNoTripulada, TNaveTripulada } from './type';
import { TipoNave} from './enums'


function isString(string:any): boolean{
  if(typeof string === 'string') return true
  return false
}
export function isNumber(number:any): boolean{
  if(!isNaN(+number)) return true
  return false
}
function isTipo(string:any):boolean{
  return Object.values(TipoNave).includes(string)
}
function isBoolean(param:any):boolean{
  return typeof param === 'boolean' ? true : false
}


// funciones de parse
const parseString = (name:string,nombreFromRequest: any):string =>{
  if(!isString(nombreFromRequest)){
    throw new Error(`${name} es incorrecto o vacio`)
  }
  return nombreFromRequest
}
const parseTipo = ( tipoFromRequest: any): TipoNave =>{
  if(!isString(tipoFromRequest) || !isTipo(tipoFromRequest)){
    throw new Error('Tipo incorrecto o vacio')
  }
  return tipoFromRequest
}
const parseNumber = (name: string, numberFromRequest: any): number => {
  if(!isNumber(numberFromRequest)){
    throw new Error(`${name} es incorrecto o vacio`)
  }
  return +numberFromRequest
}
const parseBoolean = (name: string, booleanFromRequest: any): boolean =>{
  if(!isBoolean(booleanFromRequest)){
    throw new Error(`${name} es incorrecto o vacio`)
  }
  return booleanFromRequest
}

export const newNaveLanzaderaEntry = (object: any):TNaveLanzadera =>{
  const newNaveLanzadera : TNaveLanzadera = {
    nombre: parseString('nombre',object.nombre),
    peso: parseNumber('peso',object.peso),
    empuje: parseNumber('empuje', object.empuje),
    tipo: parseTipo(object.tipo),
    combustible:parseString('combustible', object.combustible),
    velocidadMax: parseNumber('velocidadMax',object.velocidadMax),
    procedencia: parseString('procedencia', object.procedencia),
    capCarga: parseNumber('capCarga', object.capCarga),
    cantPropulsores: parseNumber('cantPropulsores', object.cantPropulsores),
  }
  return newNaveLanzadera
}
export const newNaveTripuladaEntry = (object: any): TNaveTripulada => {
  const newNaveTripulada: TNaveTripulada = {
    nombre: parseString('nombre',object.nombre),
    peso: parseNumber('peso',object.peso),
    empuje: parseNumber('empuje', object.empuje),
    tipo: parseTipo(object.tipo),
    combustible:parseString('combustible', object.combustible),
    velocidadMax: parseNumber('velocidadMax',object.velocidadMax),
    procedencia: parseString('procedencia', object.procedencia),
    capPasajeros: parseNumber('capPasajeros', object.capPasajeros)
  }
  return newNaveTripulada
}
export const newNaveNoTripuladaEntry = (object: any): TNaveNoTripulada => {
  const newNaveNoTripulada: TNaveNoTripulada = {
    nombre: parseString('nombre',object.nombre),
    peso: parseNumber('peso',object.peso),
    empuje: parseNumber('empuje', object.empuje),
    tipo: parseTipo(object.tipo),
    combustible:parseString('combustible', object.combustible),
    velocidadMax: parseNumber('velocidadMax',object.velocidadMax),
    procedencia: parseString('procedencia', object.procedencia),
    altitud: parseNumber('altitud',object.altitud),
    puedeAterrizar: parseBoolean('puedeAterrizar', object.puedeAterrizar)

  }
  return newNaveNoTripulada
}