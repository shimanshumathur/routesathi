const axios = require("axios")

exports.getFuelStations = async(req,res)=>{

const {lat,lng} = req.query

const query = `
[out:json];
node["amenity"="fuel"](around:5000,${lat},${lng});
out;
`

try{

const response = await axios.post(
"https://overpass-api.de/api/interpreter",
query
)

res.json(response.data)

}
catch(err){

res.status(500).json({error:"Fuel data error"})

}

}