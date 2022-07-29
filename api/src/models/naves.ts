import mongoose from "mongoose"
import { INaveLanzadera } from "../type"
const lanzaderaSchema = new mongoose.Schema<INaveLanzadera>({ // creando esquema para la nave lanzadera
  nombre: String,
  peso: Number,
  empuje: Number,
  tipo: String,
  combustible: String,
  velocidadMax: Number,
  capCarga: Number,
})

export const modelNaveLanzadera = mongoose.model('NaveLanzaderaDB',lanzaderaSchema)

// const tripuladaShema = new mongoose.Schema({

// })