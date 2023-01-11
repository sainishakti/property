module.exports =app=>{
    const router = require("express").Router()
    const Controller = require("../controllers/Controller.js")
    
router.post("/addContact",Controller.contactAdd)
router.post("/BlogDelete",Controller.homeAdd)

  

    app.use('/',router)
}