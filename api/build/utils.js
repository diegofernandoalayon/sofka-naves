"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newNaveNoTripuladaEntry = exports.newNaveTripuladaEntry = exports.newNaveLanzaderaEntry = exports.isNumber = void 0;
const enums_1 = require("./enums");
function isString(string) {
    if (typeof string === 'string')
        return true;
    return false;
}
function isNumber(number) {
    if (!isNaN(+number))
        return true;
    return false;
}
exports.isNumber = isNumber;
function isTipo(string) {
    return Object.values(enums_1.TipoNave).includes(string);
}
function isBoolean(param) {
    return typeof param === 'boolean' ? true : false;
}
// funciones de parse
const parseString = (name, nombreFromRequest) => {
    if (!isString(nombreFromRequest)) {
        throw new Error(`${name} es incorrecto o vacio`);
    }
    return nombreFromRequest;
};
const parseTipo = (tipoFromRequest) => {
    if (!isString(tipoFromRequest) || !isTipo(tipoFromRequest)) {
        throw new Error('Tipo incorrecto o vacio');
    }
    return tipoFromRequest;
};
const parseNumber = (name, numberFromRequest) => {
    if (!isNumber(numberFromRequest)) {
        throw new Error(`${name} es incorrecto o vacio`);
    }
    return +numberFromRequest;
};
const parseBoolean = (name, booleanFromRequest) => {
    if (!isBoolean(booleanFromRequest)) {
        throw new Error(`${name} es incorrecto o vacio`);
    }
    return booleanFromRequest;
};
const newNaveLanzaderaEntry = (object) => {
    const newNaveLanzadera = {
        nombre: parseString('nombre', object.nombre),
        peso: parseNumber('peso', object.peso),
        empuje: parseNumber('empuje', object.empuje),
        tipo: parseTipo(object.tipo),
        combustible: parseString('combustible', object.combustible),
        velocidadMax: parseNumber('velocidadMax', object.velocidadMax),
        procedencia: parseString('procedencia', object.procedencia),
        capCarga: parseNumber('capCarga', object.capCarga),
        cantPropulsores: parseNumber('cantPropulsores', object.cantPropulsores),
    };
    return newNaveLanzadera;
};
exports.newNaveLanzaderaEntry = newNaveLanzaderaEntry;
const newNaveTripuladaEntry = (object) => {
    const newNaveTripulada = {
        nombre: parseString('nombre', object.nombre),
        peso: parseNumber('peso', object.peso),
        empuje: parseNumber('empuje', object.empuje),
        tipo: parseTipo(object.tipo),
        combustible: parseString('combustible', object.combustible),
        velocidadMax: parseNumber('velocidadMax', object.velocidadMax),
        procedencia: parseString('procedencia', object.procedencia),
        capPasajeros: parseNumber('capPasajeros', object.capPasajeros)
    };
    return newNaveTripulada;
};
exports.newNaveTripuladaEntry = newNaveTripuladaEntry;
const newNaveNoTripuladaEntry = (object) => {
    const newNaveNoTripulada = {
        nombre: parseString('nombre', object.nombre),
        peso: parseNumber('peso', object.peso),
        empuje: parseNumber('empuje', object.empuje),
        tipo: parseTipo(object.tipo),
        combustible: parseString('combustible', object.combustible),
        velocidadMax: parseNumber('velocidadMax', object.velocidadMax),
        procedencia: parseString('procedencia', object.procedencia),
        altitud: parseNumber('altitud', object.altitud),
        puedeAterrizar: parseBoolean('puedeAterrizar', object.puedeAterrizar)
    };
    return newNaveNoTripulada;
};
exports.newNaveNoTripuladaEntry = newNaveNoTripuladaEntry;
