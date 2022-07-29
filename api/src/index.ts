import express from 'express'
const app = express()
app.use(express.json())

app.use(express.static('../app/build'))

// app.get('/', (_req, res) => {
//   res.send('Hello world!')
// })

const PORT = process.env.PORT || 3002
app.listen(PORT,()=>{
  console.log(`server is listening on ${PORT}`)
})