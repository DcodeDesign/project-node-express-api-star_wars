/**
 * ship Model
 */

const connection = require("./../database/conn_db")


/** GET ALL */
exports.getAll = () => {
    return connection.then((conn) => {
        return conn.query("SELECT * FROM SHIP")
    })
}

/** GET ONE */
exports.getOne = (id) => {
    return connection.then((conn) => {
        return conn.query("SELECT * FROM SHIP where shipid = ?", [id])
    })
}

/** CREATE */
exports.create = (body) => {
    return connection.then((conn) => {
        return conn.query("INSERT INTO SHIP SET ?", {
            name: body.name,
            model: body.model,
            make: body.make,
            captain: body.captain,
            capacity: body.capacity,
        })
    })
}

/** UPDATE */
exports.update = (body, id) => {
    return connection.then((conn) => {
        return conn.query("UPDATE SHIP SET ? WHERE shipid = ?", [
            {
                name: body.name,
                model: body.model,
                make: body.make,
                captain: body.captain,
                capacity: body.capacity,
            }
            , id
        ])
    })
}

/** DELETE */
exports.delete = (id) => {
    return connection.then((conn) => {
        return conn.query("DELETE FROM SHIP WHERE shipid = ?", id)
    })
}

