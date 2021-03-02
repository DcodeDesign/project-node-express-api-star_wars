/**
 * planet Model
 */

const connection = require("./../database/conn_db")


/** GET ALL */
exports.getAll = () => {
    return connection.then((conn) => {
        return conn.query("SELECT * FROM PLANET")
    })
}

/** GET ONE */
exports.getOne = (id) => {
    return connection.then((conn) => {
        return conn.query("SELECT * FROM PLANET where id = ?", [id])
    })
}

/** CREATE */
exports.create = (body) => {
    return connection.then((conn) => {
        return conn.query("INSERT INTO PLANET SET ?", {
            body: body,
        })
    })
}

/** UPDATE */
exports.update = (body, id) => {
    return connection.then((conn) => {
        return conn.query("UPDATE PLANET SET ? WHERE id = ?", [
            {
                body: body,
            }
            , id])
    })
}

/** DELETE */
exports.delete = (param) => {
    return connection.then((conn) => {
        return conn.query("DELETE FROM PLANET WHERE id = ?", [param])
    })
}

