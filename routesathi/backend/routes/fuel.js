const express = require("express")
const router = express.Router()

const {getFuelStations} = require("../controllers/fuelController")

router.get("/",getFuelStations)

module.exports = router