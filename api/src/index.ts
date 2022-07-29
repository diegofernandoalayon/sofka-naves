import express from 'express'
import navesRouter from './controllers/naves'
import 'dotenv/config'
import './mongo'
const app = express()
// dotenv.config()
app.use(express.json())

app.use(express.static('../app/build'))
app.use('/api/naves',navesRouter)
app.get('/api/hello',( _req, res) => {
  res.send('Hello world!')
})

const PORT = process.env.PORT || 3002
app.listen(PORT,()=>{
  console.log(`server is listening on ${PORT}`)
})