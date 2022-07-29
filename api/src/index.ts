import express from 'express'
const app = express()
app.use(express.json())


app.get('/', (_req, res) => {
  res.send('Hello world!')
})

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
  console.log(`server is listening on ${PORT}`)
})