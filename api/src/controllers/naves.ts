import express from 'express'

const navesRouter = express.Router()

navesRouter.get('/', (_req, res) => {
  console.log(process.env.LO)
  res.send('listar todas las naves')
})

export default navesRouter