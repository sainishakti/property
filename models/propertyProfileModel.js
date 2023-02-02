const mongoose = require("mongoose");

// Defining Schema
const propertySchema = new mongoose.Schema({
  numberOfbBedrooms: { type: String},
  numberOfbathrooms: { type: String},
  balconis: { type: String},
  otherRooms: { type: String},
  availabilityStatus: { type: String},
  ageOfProperty: { type: String},
  
  },
{   
  timestamps:true
},
)

// Model
module.exports=jobModel = mongoose.model("propertyProfile", propertySchema)




