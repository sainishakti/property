module.exports =app=>{
    const router = require("express").Router()
    const usercontroller = require("../controllers/userController.js")
    const  {checkUserAuth}= require("../middleware/middleware.js")
   
  

  router.post("/Register",usercontroller.userRegister)
  router.post("/Login",usercontroller.userLogin)
  router.post("/ChangePassword",checkUserAuth,usercontroller.changeUserPassword)

    app.use('/user',router)
}