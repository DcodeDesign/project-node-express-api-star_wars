const express = require("express")
const router = express.Router()

const allegianceController =  require("./controllers/allegiance_controller")
const beingController =  require("./controllers/being_controller")
const factionController =  require("./controllers/faction_controller")
const forcePowerController =  require("./controllers/force-power_controller")
const forceUserController =  require("./controllers/force-user_controller")
const planetController =  require("./controllers/planet_controller")
const shipController =  require("./controllers/ship_controller")
const fourOfourController =  require("./controllers/fourOfour")



// ALLEGIANCE
// http://localhost:3000/api/allegiance
router.get("/api/allegiance", allegianceController.getAll)
router.get("/api/allegiance/:id", allegianceController.getOne)
router.post("/api/allegiance", allegianceController.create)
router.post("/api/allegiance/:id", allegianceController.update)
router.delete("/api/allegiance/:id", allegianceController.delete) 

// BEING
// http://localhost:3000/api/being
router.get("/api/being", beingController.getAll)
router.get("/api/being/:id", beingController.getOne)
router.post("/api/being", beingController.create)
router.post("/api/being/:id", beingController.update)
router.delete("/api/being/:id", beingController.delete)

// FACTION
// http://localhost:3000/api/faction
router.get("/api/faction", factionController.getAll)
router.get("/api/faction/:id", factionController.getOne)
router.post("/api/faction", factionController.create)
router.post("/api/faction/:id", factionController.update)
router.delete("/api/faction/:id", factionController.delete)

// FORCE_POWER
// http://localhost:3000/api/force-power
router.get("/api/force-power", forcePowerController.getAll)
router.get("/api/force-power/:id", forcePowerController.getOne)
router.post("/api/force-power", forcePowerController.create)
router.post("/api/force-power/:id", forcePowerController.update)
router.delete("/api/force-power/:id", forcePowerController.delete)

// FORCE_USER
// http://localhost:3000/api/force-user
router.get("/api/force-user", forceUserController.getAll)
router.get("/api/force-user/:id", forceUserController.getOne)
router.post("/api/force-user", forceUserController.create)
router.post("/api/force-user/:id", forceUserController.update)
router.delete("/api/force-user/:id", forceUserController.delete)

// PLANET
// http://localhost:3000/api/planet
router.get("/api/planet", planetController.getAll)
router.get("/api/planet/:id", planetController.getOne)
router.post("/api/planet", planetController.create)
router.post("/api/planet/:id", planetController.update)
router.delete("/api/planet/:id", planetController.delete)

// SHIP
// http://localhost:3000/api/ship
router.get("/api/ship", shipController.getAll)
router.get("/api/ship/:id", shipController.getOne)
router.post("/api/ship", shipController.create)
router.post("/api/ship/:id", shipController.update)
router.delete("/api/ship/:id", shipController.delete)

// 404
router.delete("*", fourOfourController.getNotFound)

module.exports = router
