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
    
router.post("/createSell",upload.single('file'),sellController.createSell)
router.get("/ListSell",sellController.getSellList)
router.post("/deleteSell",sellController.sellDelete)
router.post("/locationSell",sellController.locationSell)
router.post("/addAddress",sellController.addAddress)
router.get("/getAddress",sellController.getAddress)
router.post("/deleteAddress",sellController.addressDelete)


  

    app.use('/',router)
}