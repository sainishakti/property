const mongoose = require("mongoose");

// Defining Schema
const bookCarSchema = new mongoose.Schema({
  name: { type: String},
  phoneNumber: { type: String},
  address: { type: String},
  city: { type: String},
  userId: { type: String},
  propertyId:{ type: String},
 
 
 },
{
  timestamps:true
},
)
// Model
module.exports=jobModel = mongoose.model("Bookcar", bookCarSchema)




