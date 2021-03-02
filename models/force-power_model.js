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
        return conn.query("SELECT * FROM FORCE_POWER where forceid = ?", [id])
    })
}

/** CREATE */
exports.create = (body) => {
    return connection.then((conn) => {
        return conn.query("INSERT INTO FORCE_POWER SET ?", {
            name: body.name,
            lethal: body.lethal
        })
    })
}

/** UPDATE */
exports.update = (body, id) => {
    return connection.then((conn) => {
        return conn.query("UPDATE FORCE_POWER SET ? WHERE forceid = ?", [
            {
                name: body.name,
                lethal: body.lethal
            }
            , id
        ])
    })
}

/** DELETE */
exports.delete = (param) => {
    return connection.then((conn) => {
        return conn.query("DELETE FROM FORCE_POWER WHERE forceid = ?", [param])
    })
}

