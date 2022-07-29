import express from 'express'
import { modelNaveLanzadera } from '../models/naves'
const navesRouter = express.Router()

navesRouter.get('/', (_req, res) => {
  
  res.send('listar todas las naves')
})

navesRouter.post('/', (req, res) => {
  const {tipo} = req.body
  // const h = req.body.tipo
  try{

    if(tipo === 'lanzadera'){

      console.log('hola')
      console.log(tipo)

      const { nombre, peso, empuje, combustible, velocidadMax, capCarga, cantPropulsores}= req.body
      const neww = new modelNaveLanzadera({
        nombre,
        peso,
        empuje,
        tipo,
        combustible,
        velocidadMax,
        capCarga,
        cantPropulsores

      }) 
      neww.save()
      .then((saveNave)=> {
        res.json(saveNave)
      })
      .catch((err:any) => {
        console.error(err.message)
      })
    }else{

      res.json({response:'no es lanzadera'})
    }

  } catch(err:any){
    res.status(400).send(err.message)
  }
})
export default navesRouter