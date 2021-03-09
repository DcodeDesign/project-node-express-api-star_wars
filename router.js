const express = require("express")
const router = express.Router()
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./Star_Wars_API.Swagger2.json');

const local = (typeof process.env.o2switch == "undefined")

let prefixForO2Switch  = ""
if(!local)
    prefixForO2Switch = process.env.prefixUrl

const allegianceController =  require("./controllers/allegiance_controller")
const beingController =  require("./controllers/being_controller")
const factionController =  require("./controllers/faction_controller")
const forcePowerController =  require("./controllers/force-power_controller")
const forceUserController =  require("./controllers/force-user_controller")
const planetController =  require("./controllers/planet_controller")
const shipController =  require("./controllers/ship_controller")
const fourOfourController =  require("./controllers/fourOfour")

router.use(prefixForO2Switch + '/api-docs', swaggerUi.serve);
router.get(prefixForO2Switch + '/api-docs', swaggerUi.setup(swaggerDocument));

// ALLEGIANCE
// http://localhost:3000/api/allegiance
router.get(prefixForO2Switch + "/api/allegiance", allegianceController.getAll)
router.get(prefixForO2Switch + "/api/allegiance/:id", allegianceController.getOne)
router.post(prefixForO2Switch + "/api/allegiance", allegianceController.create)
router.post(prefixForO2Switch + "/api/allegiance/:id", allegianceController.update)
router.delete(prefixForO2Switch + "/api/allegiance/:id", allegianceController.delete)

// BEING
// http://localhost:3000/api/being
router.get(prefixForO2Switch + "/api/being", beingController.getAll)
router.get(prefixForO2Switch + "/api/being/:id", beingController.getOne)
router.post(prefixForO2Switch + "/api/being", beingController.create)
router.post(prefixForO2Switch + "/api/being/:id", beingController.update)
router.delete(prefixForO2Switch + "/api/being/:id", beingController.delete)

// FACTION
// http://localhost:3000/api/faction
router.get(prefixForO2Switch + "/api/faction", factionController.getAll)
router.get(prefixForO2Switch + "/api/faction/:id", factionController.getOne)
router.post(prefixForO2Switch + "/api/faction", factionController.create)
router.post(prefixForO2Switch + "/api/faction/:id", factionController.update)
router.delete(prefixForO2Switch + "/api/faction/:id", factionController.delete)

// FORCE_POWER
// http://localhost:3000/api/force-power
router.get(prefixForO2Switch + "/api/force-power", forcePowerController.getAll)
router.get(prefixForO2Switch + "/api/force-power/:id", forcePowerController.getOne)
router.post(prefixForO2Switch + "/api/force-power", forcePowerController.create)
router.post(prefixForO2Switch + "/api/force-power/:id", forcePowerController.update)
router.delete(prefixForO2Switch + "/api/force-power/:id", forcePowerController.delete)

// FORCE_USER
// http://localhost:3000/api/force-user
router.get(prefixForO2Switch + "/api/force-user", forceUserController.getAll)
router.get(prefixForO2Switch + "/api/force-user/:id", forceUserController.getOne)
router.post(prefixForO2Switch + "/api/force-user", forceUserController.create)
router.post(prefixForO2Switch + "/api/force-user/:id", forceUserController.update)
router.delete(prefixForO2Switch + "/api/force-user/:id", forceUserController.delete)

// PLANET
// http://localhost:3000/api/planet
router.get(prefixForO2Switch + "/api/planet", planetController.getAll)
router.get(prefixForO2Switch + "/api/planet/:id", planetController.getOne)
router.post(prefixForO2Switch + "/api/planet", planetController.create)
router.post(prefixForO2Switch + "/api/planet/:id", planetController.update)
router.delete(prefixForO2Switch + "/api/planet/:id", planetController.delete)

// SHIP
// http://localhost:3000/api/ship
router.get(prefixForO2Switch + "/api/ship", shipController.getAll)
router.get(prefixForO2Switch + "/api/ship/:id", shipController.getOne)
router.post(prefixForO2Switch + "/api/ship", shipController.create)
router.post(prefixForO2Switch + "/api/ship/:id", shipController.update)
router.delete(prefixForO2Switch + "/api/ship/:id", shipController.delete)

// 404
router.delete("*", fourOfourController.getNotFound)

module.exports = router
