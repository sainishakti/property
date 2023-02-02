module.exports =app=>{
    const router = require("express").Router()
    const Controller = require("../controllers/adminController.js")
   
    
router.post("/login",Controller.adminLogin)
router.post("/sendOtp",Controller.sendOtpEmail)
router.post("/verifyOtp",Controller.verifyOtp)
router.post("/setPassword",Controller.userPasswordReset)




  

    app.use('/',router)
}