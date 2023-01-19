module.exports =app=>{
    const router = require("express").Router()
    const sellController = require("../controllers/sellController.js")
    
router.post("/createSell",sellController.createSell)
router.get("/ListSell",sellController.getSellList)
router.post("/deleteSell",sellController.sellDelete)


  

    app.use('/',router)
}