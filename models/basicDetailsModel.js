const mongoose = require("mongoose");

// Defining Schema
const aboutSchema = new mongoose.Schema({
  lookingTo: { type: String},
  area: { type: String},
  property: { type: String},
  phone: { type: String},
 
  
  },
{
  timestamps:true
},
)

// Model
module.exports=jobModel = mongoose.model("basicDetails", aboutSchema)



