const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const dotenv = require("dotenv")
dotenv.config()
const cors = require("cors")

const local = (typeof process.env.o2switch == "undefined")

const corsOptions = { origin: `http://localhost:*` }
app.use(cors(corsOptions))

// app.use(express.static('assets'));

app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies for form http post

// routage express
const router = require("./router")
app.use("/", router)


if(!local)
    app.listen()
else
    app.listen(process.env.LISTEN_PORT, () => { console.log(`Le serveur écoute sur le local sur le port ${process.env.LISTEN_PORT}`)})
