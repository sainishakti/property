const mongoose = require("mongoose");

// Defining Schema
const basicSchema = new mongoose.Schema({
  ownership: { type: String},
  expectedPrice: { type: String},
  pricePerAcres: { type: String},
  description: { type: String},
  allInclusivePrice: { type: Boolean,default:false},
  govetChargesExcluded: { type: Boolean,default:false},
  priceNigotiable: { type: Boolean,default:false},
  },
{   
  timestamps:true
},
)

// Model
module.exports=jobModel = mongoose.model("details", basicSchema)




