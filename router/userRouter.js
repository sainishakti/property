module.exports =app=>{
    const router = require("express").Router()
    const Controller = require("../controllers/userController.js")
    const {checkUserAuth} = require("../middleware/middleware.js")
    
router.post("/signup",Controller.userRegister)
router.post("/login",Controller.userLogin)
router.post("/sendOtp",Controller.sendOtpEmail)
router.post("/verify",Controller.verifyOtp)
router.post("/setPassword",checkUserAuth,Controller.userPasswordReset)
router.get("/userList",Controller.getUserList)
router.post("/userDelete",Controller.userDelete)
router.post("/BookProperty",Controller.BookProperty)



  

    app.use('/',router)
}