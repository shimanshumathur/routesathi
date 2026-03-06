const express = require("express")
const router = express.Router()

const {aiTripPlanner} = require("../controllers/aiController")

router.post("/",aiTripPlanner)

module.exports = router