const mongoose = require("mongoose");

// Defining Schema
const contactSchema = new mongoose.Schema({
  name: { type: String},
  email: { type: String},
  phone: { type: String},
  companyName: { type: String},
  describeProject: { type: String},
  
  },
{
  timestamps:true
},
)
// Model
module.exports=jobModel = mongoose.model("contactPage", contactSchema)




