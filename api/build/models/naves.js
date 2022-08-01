"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelNaveNoTripulada = exports.modelNaveTripulada = exports.modelNaveLanzadera = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const lanzaderaSchema = new mongoose_1.default.Schema({
    nombre: String,
    peso: Number,
    empuje: Number,
    tipo: String,
    combustible: String,
    velocidadMax: Number,
    procedencia: String,
    capCarga: Number,
    cantPropulsores: String
});
exports.modelNaveLanzadera = mongoose_1.default.model('NaveLanzaderaDB', lanzaderaSchema);
const tripuladaShema = new mongoose_1.default.Schema({
    nombre: String,
    peso: Number,
    empuje: Number,
    tipo: String,
    combustible: String,
    velocidadMax: Number,
    procedencia: String,
    capPasajeros: Number
});
exports.modelNaveTripulada = mongoose_1.default.model('NaveTripuladaDB', tripuladaShema);
const noTripuladaSchema = new mongoose_1.default.Schema({
    nombre: String,
    peso: Number,
    empuje: Number,
    tipo: String,
    combustible: String,
    velocidadMax: Number,
    procedencia: String,
    altitud: Number,
    puedeAterrizar: Boolean
});
exports.modelNaveNoTripulada = mongoose_1.default.model('NaveNoTripuladaDB', noTripuladaSchema);
