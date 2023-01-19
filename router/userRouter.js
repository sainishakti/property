module.exports =app=>{
    const router = require("express").Router()
    const Controller = require("../controllers/userController.js")
    
router.post("/signup",Controller.userRegister)
router.post("/login",Controller.userLogin)


  

    app.use('/',router)
}