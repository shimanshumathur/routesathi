exports.aiTripPlanner = async(req,res)=>{

const {start,end} = req.body

const suggestion = `
Best travel stops between ${start} and ${end}:

• Good restaurants
• Scenic places
• Fuel stops
• Hotels
`

res.json({
result:suggestion
})

}