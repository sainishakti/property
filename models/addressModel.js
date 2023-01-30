const mongoose = require("mongoose");

// Defining Schema
const addressSchema = new mongoose.Schema({
  cityName: { type: String},
  apartmentSociety: { type: String},
  locality: { type: String},
  subLocality: { type: String},
  houseNumber: { type: String},
  },
{
  timestamps:true
},
)

// Model
module.exports=jobModel = mongoose.model("address", addressSchema)




