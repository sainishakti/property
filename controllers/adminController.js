const  adminModel =require("../models/adminModel.js")


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
  module.exports.userRegister = async (req, res) => {
    const { mobile,email, password, confirmPassword,name} = req.body
    const user = await adminModel.findOne({ email: email })
    if (user) {
      res.send({ "status": "failed", "message": "Email already exists" })
    }
    else {
      if ( email && password && confirmPassword && mobile ) {
        if (password === confirmPassword) {
          try {
            const salt = await bcrypt.genSalt(10)
            const hashPassword = await bcrypt.hash(password, salt)
            const data = new adminModel({
              email: email,
              password: hashPassword,
              mobile : mobile,
              name:name,
            })
            await data.save()
            res.status(201).send({ "status":200, "success":true, "message": "Registration Successfully",data })
          } catch (error) {
            console.log(error)
            res.status(401).send({ "status": 401,"success":false, "message": "Unable to Register" })
          }
        } else {
            res.status(401).send({ "status": 401,"success":false,  "message": "Password and Confirm Password doesn't match" })
        }
      } else {
    res.status(401).send({"status": 401,"success":false, "message": "All fields are required" })
      }
    }
  }