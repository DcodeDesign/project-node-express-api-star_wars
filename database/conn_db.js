const mysql = require("promise-mysql")

const local = (typeof process.env.o2switch == "undefined")

let host = !local ?  'localhost' : process.env.HOST
let port = !local ? '3306' : process.env.PORT
let userDB = !local ? 'iyib4940_api_star_wars' : process.env.USER_DB
let password = !local ? 'NuagePetit13@' : process.env.PASS
let database = !local ? 'iyib4940_star_wars' : process.env.DB

module.exports = mysql.createConnection({
    host: host,
    port: port,
    user: userDB,
    password: password,
    database: database
})
