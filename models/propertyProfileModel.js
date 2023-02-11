const mongoose = require("mongoose");

// Defining Schema
const propertySchema = new mongoose.Schema({
  userId:{type:String},
  numberOfbBedrooms: { type: String},
  numberOfbathrooms: { type: String},
  balconis: { type: String},
  otherRooms: { type: String},
  availabilityStatus: { type: String},
  ageOfProperty: { type: String},
  coveredParking: { type: String},
  openParking: { type: String},
  totalFloors: { type: String},
  propertyOnFloor: { type: String},
  furnishingType: { type: String},
  furnishing: [{
    light: { type: Number},
    Ac: { type: Number},
    beds: { type: Number},
    gyser: { type: Number},
    fans: { type: Number},
    tv: { type: Number},
    wardrobe: { type: Number},
  }],
  otherFurnishing: { type: Array},
  },
{   
  timestamps:true
},
)

// Model
module.exports=jobModel = mongoose.model("propertyProfile", propertySchema)




