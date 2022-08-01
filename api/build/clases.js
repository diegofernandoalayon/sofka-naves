"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NaveNoTripulada = exports.NaveTripulada = exports.NaveLanzadera = void 0;
class Nave {
    constructor(nombre, peso, empuje, tipo, combustible, velocidadMax, procedencia) {
        this.nombre = nombre;
        this.peso = peso;
        this.empuje = empuje;
        this.tipo = tipo;
        this.combustible = combustible;
        this.velocidadMax = velocidadMax;
        this.procedencia = procedencia;
    }
    despegar() {
        return 'despegando';
    }
    aterrizar() {
        return 'aterrizando';
    }
}
class NaveLanzadera extends Nave {
    constructor(nombre, peso, empuje, tipo, combustible, velocidadMax, procedencia, capCarga, cantPropulsores) {
        super(nombre, peso, empuje, tipo, combustible, velocidadMax, procedencia);
        this.capCarga = capCarga;
        this.cantPropulsores = cantPropulsores;
    }
}
exports.NaveLanzadera = NaveLanzadera;
class NaveTripulada extends Nave {
    constructor(nombre, peso, empuje, tipo, combustible, velocidadMax, procedencia, capPasajeros) {
        super(nombre, peso, empuje, tipo, combustible, velocidadMax, procedencia);
        this.capPasajeros = capPasajeros;
    }
}
exports.NaveTripulada = NaveTripulada;
class NaveNoTripulada extends Nave {
    constructor(nombre, peso, empuje, tipo, combustible, velocidadMax, procedencia, altitud, puedeAterrizar) {
        super(nombre, peso, empuje, tipo, combustible, velocidadMax, procedencia);
        this.altitud = altitud;
        this.puedeAterrizar = puedeAterrizar;
    }
}
exports.NaveNoTripulada = NaveNoTripulada;
