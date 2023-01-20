const mongoose = require("mongoose");

// Defining Schema
const sellSchema = new mongoose.Schema({
  rent: { type: String},
  addPrice: { type: String},
  location: { type: String},
  pgLiving: { type: String},
  coWorking: { type: String},
  image: { type: String},
  allResidential: { type: String},
  BudgetRange: { type: String},
  residentialProject: { type: String},
  },
{
  timestamps:true
},
)

// Model
module.exports=jobModel = mongoose.model("sell", sellSchema)




