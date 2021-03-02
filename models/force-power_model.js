/**
 * force-power Model
 */

const connection = require("./../database/conn_db")


/** GET ALL */
exports.getAll = () => {
    return connection.then((conn) => {
        return conn.query("SELECT * FROM FORCE_POWER")
    })
}

/** GET ONE */
exports.getOne = (id) => {
    return connection.then((conn) => {
        return conn.query("SELECT * FROM FORCE_POWER where id = ?", [id])
    })
}

/** CREATE */
exports.create = (body) => {
    return connection.then((conn) => {
        return conn.query("INSERT INTO FORCE_POWER SET ?", {
            body: body,
        })
    })
}

/** UPDATE */
exports.update = (body, id) => {
    return connection.then((conn) => {
        return conn.query("UPDATE FORCE_POWER FROM SET ? FORCE_POWER WHERE id = ?", [
            {
                body: body,
            }
            , id])
    })
}

/** DELETE */
exports.delete = (param) => {
    return connection.then((conn) => {
        return conn.query("DELETE FROM FORCE_POWER WHERE id = ?", [param])
    })
}

