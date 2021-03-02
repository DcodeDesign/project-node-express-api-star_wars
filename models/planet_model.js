/**
 * planet Model
 */

const connection = require("./../database/conn_db")


/** GET ALL */
exports.getAll = () => {
    return connection.then((conn) => {
        return conn.query(`SELECT * FROM PLANET`)
    })
}

/** GET ONE */
exports.getOne = (id) => {
    return connection.then((conn) => {
        return conn.query(`SELECT * FROM PLANET WHERE planetid = ?`,
            id
        )
    })
}

/** CREATE */
exports.create = (body) => {
    return connection.then((conn) => {
        return conn.query("INSERT INTO PLANET SET ?", {
            name: body.name,
            population: body.population,
            owner: body.owner
        })
    })
}

/** UPDATE */
exports.update = (body, id) => {
    return connection.then((conn) => {
        return conn.query("UPDATE PLANET SET ? WHERE planetid = ?", [
            {
                name: body.name,
                population: body.population,
                owner: body.owner
            }
            , id])
    })
}

/** DELETE */
exports.delete = (id) => {
    return connection.then((conn) => {
        return conn.query("DELETE FROM PLANET WHERE planetid = ?", id)
    })
}

