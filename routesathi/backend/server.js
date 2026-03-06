const express = require("express")
const cors = require("cors")
require("dotenv").config()

const routeAPI = require("./routes/route")
const fuelAPI = require("./routes/fuel")
const evAPI = require("./routes/ev")
const aiAPI = require("./routes/ai")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/route",routeAPI)
app.use("/api/fuel",fuelAPI)
app.use("/api/ev",evAPI)
app.use("/api/ai",aiAPI)

app.listen(5000,()=>{
console.log("Server running on port 5000")
})