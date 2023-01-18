const mongoose = require('mongoose');
const url =process.env.STAGING_URL
mongoose.connect("mongodb+srv://root:root@cluster0.hmprbiu.mongodb.net/property",{
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() =>
console.log("Connect Is Successfully")
).catch((err) =>
console.log("Something Went wrong",err)
 );