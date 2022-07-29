import mongoose from "mongoose"

const { MONGO_DB_URI } = process.env
if(MONGO_DB_URI !== undefined){

  mongoose.connect(MONGO_DB_URI)
  .then(() => {
    console.log('Database connection established')
  })
  .catch((e)  => {
    console.error(e.message)
  })
  process.on('uncaughtException', () => {
    mongoose.connection.close()
  })
}