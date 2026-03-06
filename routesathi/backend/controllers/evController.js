const axios = require("axios")

exports.getEVStations = async(req,res)=>{

const {lat,lng} = req.query

try{

const url =
`https://api.openchargemap.io/v3/poi/?output=json&latitude=${lat}&longitude=${lng}&distance=10`

const response = await axios.get(url)

res.json(response.data)

}
catch(err){

res.status(500).json({error:"EV data error"})

}

}