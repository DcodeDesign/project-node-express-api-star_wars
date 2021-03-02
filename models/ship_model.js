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
        return conn.query("SELECT * FROM SHIP where id = ?", [id])
    })
}

/** CREATE */
exports.create = (body) => {
    return connection.then((conn) => {
        return conn.query("INSERT INTO SHIP SET ?", {
            body: body,
        })
    })
}

/** UPDATE */
exports.update = (body, id) => {
    return connection.then((conn) => {
        return conn.query("UPDATE SHIP FROM SET ? SHIP WHERE id = ?", [
            {
                body: body,
            }
            , id])
    })
}

/** DELETE */
exports.delete = (param) => {
    return connection.then((conn) => {
        return conn.query("DELETE FROM SHIP WHERE id = ?", [param])
    })
}

