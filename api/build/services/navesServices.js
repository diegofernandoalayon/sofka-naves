"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNaveNoTripulada = exports.addNaveTripulada = exports.addNaveLanzadera = void 0;
const naves_1 = require("../models/naves");
const addNaveLanzadera = (newNaveLanzaderaEntry) => {
    const newNave = new naves_1.modelNaveLanzadera(newNaveLanzaderaEntry);
    return newNave.save();
};
exports.addNaveLanzadera = addNaveLanzadera;
const addNaveTripulada = (newNaveTripuladaEntry) => {
    const newNave = new naves_1.modelNaveTripulada(newNaveTripuladaEntry);
    return newNave.save();
};
exports.addNaveTripulada = addNaveTripulada;
const addNaveNoTripulada = (newNaveNoTripuladaEntry) => {
    const newNave = new naves_1.modelNaveNoTripulada(newNaveNoTripuladaEntry);
    return newNave.save();
};
exports.addNaveNoTripulada = addNaveNoTripulada;
