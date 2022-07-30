import { TNaveLanzadera } from './type';
import { TipoNave} from './enums'


function isString(string:any): boolean{
  if(typeof string === 'string') return true
  return false
}
function isNumber(number:any): boolean{
  if(typeof +number === 'number') return true
  return false
}
function isTipo(string:any):boolean{
  return Object.values(TipoNave).includes(string)
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