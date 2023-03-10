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
    







router.post("/AddPropertyDetails",upload.array('file',8),sellController.addBasicDetails)
router.get("/SellListProperty",sellController.AllProperty)
router.post("/DeleteSellProperty",sellController.propertyDelete)
router.post("/CityData",sellController.getCitydata)
router.get("/propertydataPg",sellController.propertyDataPg)
router.get("/propertydataSell",sellController.propertyDataSell)
router.get("/propertydataRent",sellController.propertyDataRent)



app.use('/',router)
}