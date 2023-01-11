const  homeModel =require("../models/homeModel.js")
const  contactModel =require("../models/contactModel.js")


//Addhome..........................................................................
module.exports.homeAdd = async (req, res) => {
    const {name,email,phone,message} = req.body
          try {
            const data = new homeModel({
                name:name,
                email:email,
                phone:phone,
                message:message,
      
})
            await data.save()
            res.status(201).send({ "status":200, "success":true, "message": "Add homePage Successfully",data })
          } catch (error) {
            console.log(error)
            res.status(401).send({ "status": 401,"success":false, "message": "Unable to Add" })
          }
        } 
//addcontact..............................................................................
module.exports.contactAdd = async (req, res) => {
  const {name,email,phone,describeProject,companyName} = req.body
        try {
          const data = new homeModel({
              name:name,
              email:email,
              phone:phone,
              describeProject:describeProject,
              companyName:companyName
    
})
          await data.save()
          res.status(201).send({ "status":200, "success":true, "message": "Add Contact Successfully",data })
        } catch (error) {
          console.log(error)
          res.status(401).send({ "status": 401,"success":false, "message": "Unable to Add" })
        }
      } 