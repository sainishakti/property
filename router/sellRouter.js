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
    
router.post("/createSell",upload.array('file',8),sellController.createSell)
router.get("/ListSell",sellController.getSellList)
router.post("/deleteSell",sellController.sellDelete)
router.post("/locationSell",sellController.locationSell)
router.post("/addAddress",sellController.addAddress)
router.get("/getAddress",sellController.getAddress)
router.post("/deleteAddress",sellController.addressDelete)
router.post("/uploadImage",upload.single('file'),sellController.uploadImage)
router.post("/addDetails",sellController.addDetails)
router.get("/getDetails",sellController.addDetails)
router.post("/deleteDetails",sellController.detailsDelete)
router.post("/basicDetails",sellController.addBasicDetails)
router.get("/getBasicDetails",sellController.getBasicDetails)
router.post("/deleteBasicDetails",sellController.basicDetailsDelete)
router.post("/createHousePgSell",upload.array('file',8),sellController.createPGHouseSell)
router.get("/getListHouse",sellController.getPgSHouse)
router.post("/deletePgHouse",sellController.pgHouseDelete)

  

    app.use('/',router)
}