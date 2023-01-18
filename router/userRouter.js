module.exports =app=>{
    const router = require("express").Router()
    const Controller = require("../controllers/Controller.js")
    
router.post("/signup",Controller.userRegister)
router.post("/login",Controller.userLogin)


  

    app.use('/',router)
}