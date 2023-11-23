import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import authRoute from './route/auth.js'

const app = express()
dotenv.config()

const port = 8200

const connect = async ()=> {
    try {
        await mongoose.connect(
            "mongodb+srv://maazsibhai:maaz@cluster0.dilhdz7.mongodb.net/"
            // ,
            // { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
            // () => {
            //   console.log('Connected to MongoDB');
            // }
          );
          console.log("connected")
    } catch (error) {
        console.log(error)
        throw error;
    }
}

mongoose.connection.on("disconnected",() => {
    console.log("mongoDB disconnected")
})

mongoose.connection.on("connected",() => {
    console.log("mongoDB connected")
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public')
)
app.use("/api/auth", authRoute);

app.listen(port, () => {
    connect()
    console.log(`Eco Threads App listening on port ${port}!`)
})

