const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const port = 3000

app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies for form http post

// routage express
var router = require("./router")
app.use("/", router)


app.listen(port, console.log(`Les serveur Express écoute sur le port ${port}`))
