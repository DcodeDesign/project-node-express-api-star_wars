const mysql = require("promise-mysql")

module.exports = mysql.createConnection({
    host: 'localhost',
    port: '8889',
    user: 'root',
    password: 'root',
    database: 'Star_wars'
})
