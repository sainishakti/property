const mongoose = require("mongoose");

// Defining Schema
const homeSchema = new mongoose.Schema({
  name: { type: String},
  email: { type: String},
  phone: { type: String},
  message: { type: String},

  
  },
{
  timestamps:true
},
)
// Model
module.exports=jobModel = mongoose.model("homePage", homeSchema)




