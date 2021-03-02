/**
 * force-user Model
 */

const connection = require("./../database/conn_db")


/** GET ALL */
exports.getAll = () => {
    return connection.then((conn) => {
        return conn.query(`
            SELECT forceuserid, name, lethal, fname, lname, race, homeworld, force_sensitive
            from FORCE_USER
                     INNER JOIN FORCE_POWER FP on FORCE_USER.forceid = FP.forceid
                     INNER JOIN BEING B on FORCE_USER.beingid = B.beingid
        `)
    })
}

/** GET ONE */
exports.getOne = (id) => {
    return connection.then((conn) => {
        return conn.query(`
                    SELECT forceuserid, name, lethal, fname, lname, race, homeworld, force_sensitive
                    from FORCE_USER
                             INNER JOIN FORCE_POWER FP on FORCE_USER.forceid = FP.forceid
                             INNER JOIN BEING B on FORCE_USER.beingid = B.beingid
                    WHERE forceuserid =  ?
            `
            , id
        )
    })
}

/** CREATE */
exports.create = (body) => {
    return connection.then((conn) => {
        return conn.query("INSERT INTO FORCE_USER SET ?", {
            forceid: body.forceid,
            beingid: body.beingid
        })
    })
}

/** UPDATE */
exports.update = (body, id) => {
    return connection.then((conn) => {
        return conn.query("UPDATE FORCE_USER SET ? WHERE forceuserid = ?", [
            {
                forceid: body.forceid,
                beingid: body.beingid
            }
            , id
        ])
    })
}

/** DELETE */
exports.delete = (param) => {
    return connection.then((conn) => {
        return conn.query("DELETE FROM FORCE_USER WHERE forceuserid = ?", [param])
    })
}

