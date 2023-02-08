const mongoose = require("mongoose");

// Defining Schema
const sellSchema = new mongoose.Schema({
  type: { type: String},
  bedroomd: { type: String},
  bathRooms: { type: String},
  furnishing: { type: String},
  FurnishingConstruction: { type: String},
  listedBy: { type: String},
  totalFloors: { type: String},
  floorNumber: { type: String},
  facing: { type: String},
  carParking: { type: String},
  projectName: { type: String},
  addTitle: { type: String},
  descriptions: { type: String},
  price: { type: String},
  images: { type: Array},
  state: { type: String},
  city: { type: String},
  phoneNumber: { type: String},
  },
{
  timestamps:true
},
)

// Model
module.exports=jobModel = mongoose.model("sell", sellSchema)




