const mongoose = require("mongoose");

// Defining Schema
const locationSchema = new mongoose.Schema({
    userId: { type: String},
    locality: { type: String},
    cityName: { type: String},
 
 
  },
{
  timestamps:true
},
)

// Model
module.exports=locationModel = mongoose.model("location", locationSchema)




