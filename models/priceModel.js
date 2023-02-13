const mongoose = require("mongoose");

// Defining Schema
const priceSchema = new mongoose.Schema({
    userId: { type: String},
    ownership: { type: String},
    exppectedPrice: { type: Number},
    pricePerAcres: { type: Number},
 
 
  },
{
  timestamps:true
},
)

// Model
module.exports=priceModel = mongoose.model("price", priceSchema)




