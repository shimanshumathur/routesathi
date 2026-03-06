const axios = require("axios")

exports.getRoute = async(req,res)=>{

const {start,end} = req.query

try{

const url =
`https://maps.googleapis.com/maps/api/directions/json?origin=${start}&destination=${end}&key=${process.env.GOOGLE_KEY}`

const response = await axios.get(url)

res.json(response.data)

}
catch(err){

res.status(500).json({error:"Route fetch failed"})

}

}