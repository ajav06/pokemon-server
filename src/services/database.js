import mongoose from 'mongoose'
require('dotenv').config()

const mongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
    console.log('conected to mongoDB')
  } catch (error) {
    console.error(error)
  }
}

mongoDB()
