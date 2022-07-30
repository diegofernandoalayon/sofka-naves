import { TNaveNoTripulada, TNaveTripulada, TNaveLanzadera } from '../type';
import { modelNaveLanzadera, modelNaveNoTripulada, modelNaveTripulada } from "../models/naves"

export const addNaveLanzadera = (newNaveLanzaderaEntry: TNaveLanzadera) => {
  const newNave = new modelNaveLanzadera(newNaveLanzaderaEntry)
  return newNave.save()
}
export const addNaveTripulada = (newNaveTripuladaEntry: TNaveTripulada) => {
  const newNave = new modelNaveTripulada(newNaveTripuladaEntry)
  return newNave.save()
}
export const addNaveNoTripulada = (newNaveNoTripuladaEntry: TNaveNoTripulada) => {
  const newNave = new modelNaveNoTripulada(newNaveNoTripuladaEntry)
  return newNave.save()
}