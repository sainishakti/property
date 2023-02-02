const  adminModel =require("../models/adminModel.js")
const nodemailer = require("nodemailer")
var smtpTransport = require('nodemailer-smtp-transport');


//login............................................................
module.exports.adminLogin = async (req, res) => {
    try {
      const { email, password } = req.body
      if (password && email ) {
        const user = await adminModel.findOne({email: email})
        if (user != null) {
          const isMatch = await bcrypt.compare(password, user.password)
          if ((user.email === email) && isMatch) {
            // Generate JWT Token
            const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' })
            res.send({ "status": 201,"success":true, "message": "Login Success", "token": token })
          } else {
            res.status(401).send({"status": 401,"success":false, "message":  "Email or Password is not Valid" })
          }
        } else {
          res.status(401).send({"status": 401,"success":false, "message":  "You are not a Admin"  })
        }
      } else {
     res.status(401).send({"status": 401,"success":false, "message":  "All Fields are Required" })
        
      }
    } catch (error) {
      console.log(error)
     res.status(401).send({"status": "401","success":false, "message": "Unable to Login" })
    }
  }
  //forgotPassword.......................................................
module.exports.sendOtpEmail = async (req, res) => {
  const { email } = req.body
var otp = Math.floor(1000 + Math.random() * 9000);
console.log(otp);
  if (email) {
    const user = await adminModel.findOne({ email: email })
    if (user) {
   const data = await adminModel.findOneAndUpdate({email},{ otp:otp})
      const transporter = nodemailer.createTransport(smtpTransport({
        host: "smtp-mail.outlook.com", 
        secureConnection: false, 
        port: 587,
        auth: {
            user: "aryasaini2025@outlook.com",
            pass: "saini@2525"
        }
    }));
    var mailOptions = {
      from:  "aryasaini2025@outlook.com",
      to: email, 
      subject: 'Sending Otp Your Mail',
      text: ""+otp, 
       };
  
  // // send mail with defined transport object
   transporter.sendMail(mailOptions, function(error, info){
      if(error){
      console.log(error);
      }else{
        console.log(info);
        res.send({ "status": "201","success":true, "message": "Otp Send Your mail Successfully" })
      }
    })
       }
    else {
      res.status(401).send({"status": "401","success":false, "message":  "Email doesn't exists"   }) 
  }
    }
  else {
    res.status(401).send({"status": "401","success":false, "message":  "Email Field is Required"  })
  }
  }
  //verifyOtp
  module.exports.verifyOtp = async (req, res) => {
    const {otp,email } = req.body
    try{
    const user = await adminModel.findOne({$and: [{email: email},{otp: otp}]})
    if(user){
      const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' })
      res.send({ "status": "201","success":true, "message": "Otp Verify Successfully",token })
    }else{
      res.status(401).send({"status": "401","success":false, "message":  " Your Otp  Is Invalid"  })
    }
  }catch(error){
     res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong"  })
  }
  }
  //setPassword

  module.exports.userPasswordReset = async (req, res) => {
    const { password, password_confirmation } = req.body
    try {
      if (password && password_confirmation) {
        if (password !== password_confirmation) {
          res.status(401).send({"status": "401","success":false, "message":  "New Password and Confirm New Password doesn't match"   })
        } else {
          const salt = await bcrypt.genSalt(10)
          const newHashPassword = await bcrypt.hash(password, salt)
          await adminModel.findByIdAndUpdate(req.users._id, { $set: { password: newHashPassword } })
          res.send({ "status": "201","success":true, "message": "Password Reset Successfully" })
        }
      } else {
        res.status(401).send({"status": "401","success":false, "message":  "All Fields are Required"})
      }
    }catch (error){
     console.log("err...........=>",error)
      res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" ,error })
    }
  }

  