module.exports =app=>{
    const router = require("express").Router()
    const sellController = require("../controllers/sellController.js")
    const multer = require('multer')
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, './uploads')
        },
        filename: function (req, file, cb) {
          cb(null, file.originalname)
        }
    })
    var upload = multer({ storage: storage })
    
//router.post("/createSell",upload.array('file',8),sellController.createSell)






router.post("/AddPropertyDetails",upload.array('file',8),sellController.addBasicDetails)

app.use('/',router)
}