const express = require("express")
const router = express.Router()

const {getEVStations} = require("../controllers/evController")

router.get("/",getEVStations)

module.exports = router