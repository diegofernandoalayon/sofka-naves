import express from 'express'
import { modelNaveLanzadera, modelNaveTripulada } from '../models/naves'
import { newNaveLanzaderaEntry, newNaveNoTripuladaEntry, newNaveTripuladaEntry } from '../utils'
import * as navesServices from '../services/navesServices'
const navesRouter = express.Router()

navesRouter.get('/', async(_req, res) => {
  const responseNavesLanzadera = await modelNaveLanzadera.find({})
  const responseNavesTripulada = await modelNaveTripulada.find({})
  const responseAll = [...responseNavesLanzadera, ...responseNavesTripulada]
  res.json(responseAll)
  // res.send('listar todas las naves')
})

navesRouter.post('/', (req, res) => {
  const {tipo} = req.body
  // const h = req.body.tipo
  try{

    if(tipo === 'lanzadera'){

      const newNave = newNaveLanzaderaEntry(req.body)
      navesServices
      .addNaveLanzadera(newNave)
      .then((naveSaved) => {
        return res.json(naveSaved).end()
      })
      .catch((err:any) =>{
        console.error(err.message)
        res.status(400).end()
      })
      
      
    }else if( tipo === 'tripulada'){
      const newNave = newNaveTripuladaEntry(req.body)
      navesServices
      .addNaveTripulada(newNave)
      .then((naveSaved) => {
        res.json(naveSaved)
      })
      .catch((err:any) => {
        console.error(err.message)
        res.status(400).end()
      })
      // res.json({response: 'tripulada'})
    }else if(tipo === 'noTripulada'){
      const newNave = newNaveNoTripuladaEntry(req.body)
      navesServices
      .addNaveNoTripulada(newNave)
      .then((naveSaved) => {
        res.json(naveSaved).end()
      })
      .catch((err:any) => {
        console.error(err.message)
        res.status(400).end()
      })
     
    }else{

      res.json({response:'no es lanzadera'})
    }

  } catch(err:any){
    res.status(400).json({message: err.message,ok: false}).end()
  }
})
export default navesRouter