module.exports =app=>{
    const router = require("express").Router()
    const Controller = require("../controllers/Controller.js")
    
router.post("/addContact",Controller.contactAdd)
router.post("/addHome",Controller.homeAdd)

  

    app.use('/',router)
}