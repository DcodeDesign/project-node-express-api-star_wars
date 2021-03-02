/**
 * faction Model
 */

const connection = require("./../database/conn_db")


/** GET ALL */
exports.getAll = () => {
    return connection.then((conn) => {
        return conn.query(`
            SELECT F.name, numMembers, fname, lname
            FROM FACTION F
                     INNER JOIN BEING B on B.beingid = F.leader
                     INNER JOIN PLANET P on B.homeworld = P.planetid;
        `)
    })
}

/** GET ONE */
exports.getOne = (id) => {
    return connection.then((conn) => {
        return conn.query(`
                    SELECT F.name, numMembers, fname, lname
                    FROM FACTION F
                             INNER JOIN BEING B on B.beingid = F.leader
                             INNER JOIN PLANET P on B.homeworld = P.planetid
                    WHERE factionid = ?`
            ,
            id)
    })
}

/** CREATE */
exports.create = (body) => {
    return connection.then((conn) => {
        return conn.query(" INSERT INTO FACTION SET ? ", {
            name: body.name,
            numMembers : body.numMembers,
            leader: body.leader
        })
    })
}

/** UPDATE */
exports.update = (body, id) => {
    return connection.then((conn) => {
        return conn.query("UPDATE FACTION SET ? WHERE factionid = ?", [
            {
                name: body.name,
                numMembers : body.numMembers,
                leader: body.leader
            }
            , id])
    })
}

/** DELETE */
exports.delete = (id) => {
    return connection.then((conn) => {
        return conn.query("DELETE FROM FACTION WHERE factionid = ? ", id)
    })
}

