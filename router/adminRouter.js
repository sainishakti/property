module.exports =app=>{
    const router = require("express").Router()
    const Controller = require("../controllers/adminController.js")
   
    
router.post("/login",Controller.adminLogin)




  

    app.use('/',router)
}