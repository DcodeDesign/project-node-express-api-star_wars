/**
 * force-user Model
 */

const connection = require("./../database/conn_db")


/** GET ALL */
exports.getAll = () => {
    return connection.then((conn) => {
        return conn.query("SELECT * FROM FORCE_USER")
    })
}

/** GET ONE */
exports.getOne = (id) => {
    return connection.then((conn) => {
        return conn.query("SELECT * FROM FORCE_USER where id = ?", [id])
    })
}

/** CREATE */
exports.create = (body) => {
    return connection.then((conn) => {
        return conn.query("INSERT INTO FORCE_USER SET ?", {
            body: body,
        })
    })
}

/** UPDATE */
exports.update = (body, id) => {
    return connection.then((conn) => {
        return conn.query("UPDATE FORCE_USER SET ? WHERE id = ?", [
            {
                body: body,
            }
            , id])
    })
}

/** DELETE */
exports.delete = (param) => {
    return connection.then((conn) => {
        return conn.query("DELETE FROM FORCE_USER WHERE id = ?", [param])
    })
}

