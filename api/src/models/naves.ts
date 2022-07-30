import mongoose from "mongoose"
import { INaveLanzadera, INaveNoTripulada, INaveTripulada } from "../type"
const lanzaderaSchema = new mongoose.Schema<INaveLanzadera>({ // creando esquema para la nave lanzadera
  nombre: String,
  peso: Number,
  empuje: Number,
  tipo: String,
  combustible: String,
  velocidadMax: Number,
  procedencia: String,
  capCarga: Number,
  cantPropulsores: String
})

export const modelNaveLanzadera = mongoose.model('NaveLanzaderaDB',lanzaderaSchema)

const tripuladaShema = new mongoose.Schema<INaveTripulada>({
  nombre: String,
  peso: Number,
  empuje: Number,
  tipo: String,
  combustible: String,
  velocidadMax: Number,
  procedencia: String,
  capPasajeros: Number
})
export const modelNaveTripulada = mongoose.model('NaveTripuladaDB', tripuladaShema)

const noTripuladaSchema = new mongoose.Schema<INaveNoTripulada>({
  nombre: String,
  peso: Number,
  empuje: Number,
  tipo: String,
  combustible: String,
  velocidadMax: Number,
  procedencia: String,
  altitud: Number,
  puedeAterrizar: Boolean
})
export const modelNaveNoTripulada = mongoose.model('NaveNoTripuladaDB', noTripuladaSchema)