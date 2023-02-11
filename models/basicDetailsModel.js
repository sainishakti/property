const mongoose = require("mongoose");

// Defining Schema
const aboutSchema = new mongoose.Schema({
  lookingTo: { type: String},
  area: { type: String},
  property: { type: String},
  userId: { type: String},
  
  
  },
{
  timestamps:true
},
)

// Model
module.exports=jobModel = mongoose.model("basicDetails", aboutSchema)




