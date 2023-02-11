const mongoose = require("mongoose");

// Defining Schema
const imageSchema = new mongoose.Schema({
  image: { type: Array},
  userId: { type: String},
 
 
  },
{
  timestamps:true
},
)

// Model
module.exports=jobModel = mongoose.model("image", imageSchema)




