const  sellModel =require("../models/sellHomeModel.js")
const  addressModel =require("../models/addressModel.js")
const imageModel =require("../models/imageModel.js")
const detailsModel =require("../models/detailsModel.js")
const basicDetailsModel =require("../models/basicDetailsModel.js")
//create...................................................................................
module.exports.createSell = async (req, res) => {
    const { rent,addPrice, location, pgLiving,coWorking,allResidential,BudgetRange,residentialProject} = req.body;
          try {
            if(req.file == undefined){
            var data = new sellModel({
                rent:rent,
                addPrice: addPrice,
                location: location,
                pgLiving : pgLiving,
                coWorking:coWorking,
                allResidential:allResidential,
                BudgetRange:BudgetRange,
                residentialProject:residentialProject
            })
            await data.save()
            res.status(201).send({ "status":200, "success":true, "message": "Create Sell Successfully",data })
            }else{
              var data = new sellModel({
                rent:rent,
                addPrice: addPrice,
                location: location,
                pgLiving : pgLiving,
                coWorking:coWorking,
                image:"https://property-ukgv.onrender.com/uploads/"+req.file.filename,
                allResidential:allResidential,
                BudgetRange:BudgetRange,
                residentialProject:residentialProject
            })
            await data.save()
            res.status(201).send({ "status":200, "success":true, "message": "Create Sell Successfully",data })

            }
          } catch (error) {
            console.log(error)
            res.status(401).send({ "status": 401,"success":false, "message": "Unable to Create" })
          }
        
      } 
      //list...........................................................................
      module.exports.getSellList = async (req, res) => {
        try{
          const data = await sellModel.find()
        if(data){
        res.send({ "status": "201","success":true, "message": "get Sell List  Successfully",data })
        }else{
          res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
        }
        }catch(error){
          res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
          console.log("error",error);
    }
      }
    //delete...................................................................................
    module.exports.sellDelete = async (req, res) => {
        const _id = req.body._id;
        try{
          const data = await sellModel.findOneAndDelete({_id:_id})
        if(data){
        res.send({ "status": "201","success":true, "message": "Deleted Sell Successfully",data })
        }else{
          res.status(401).send({"status": "401","success":false, "message": "Unable To Delete" })
        }
        }catch(error){
          res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
          console.log("error",error);
    }
      }
//searchcityAccordig.................................
module.exports.locationSell = async (req, res) => {
  const location = req.body.location
  try{
    const data = await sellModel.find({location:location})
  if(data){
  res.send({ "status": "201","success":true, "message": "get Sell Data  Successfully",data })
  }else{
    res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
  }
  }catch(error){
    res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
    console.log("error",error);
}
}
//addAddress.......................................................................................
module.exports.addAddress = async (req, res) => {
  const { cityName,apartmentSociety, locality, subLocality,houseNumber} = req.body;
        try {
          const data = new addressModel({
            cityName: cityName,
            apartmentSociety: apartmentSociety,
            locality : locality,
            subLocality:subLocality,
            houseNumber:houseNumber
          })
          await data.save()
          res.status(201).send({ "status":200, "success":true, "message": "Address Add Successfully",data })
        } catch (error) {
          console.log(error)
          res.status(401).send({ "status": 401,"success":false, "message": "Unable to Add" })
        }
      
    } 
  
 //listAddress..........................................................................................
 module.exports.getAddress = async (req, res) => {
  try{
    const data = await addressModel.find()
  if(data){
  res.send({ "status": "201","success":true, "message": "get Address List  Successfully",data })
  }else{
    res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
  }
  }catch(error){
    res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
    console.log("error",error);
}
}
//deleteAddress..........................................................
module.exports.addressDelete = async (req, res) => {
  const _id = req.body._id;
  try{
    const data = await addressModel.findOneAndDelete({_id:_id})
  if(data){
  res.send({ "status": "201","success":true, "message": "Deleted address Successfully",data })
  }else{
    res.status(401).send({"status": "401","success":false, "message": "Unable To Delete" })
  }
  }catch(error){
    res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
    console.log("error",error);
}
}
//uploadImage........................................................
module.exports.uploadImage = async (req, res) => {
        try {
          const data = new imageModel({
            image:"https://property-ukgv.onrender.com/uploads/"+req.file.filename,
           
          })
          await data.save()
          res.status(201).send({ "status":200, "success":true, "message": "Upload Image Successfully",data })
        } catch (error) {
          console.log(error)
          res.status(401).send({ "status": 401,"success":false, "message": "Unable to Upload" })
        }
      
    } 
    //addDetails.........................................................................
    module.exports.addDetails = async (req, res) => {
      const { ownership,expectedPrice, pricePerAcres, description,allInclusivePrice,govetChargesExcluded,priceNigotiable}= req.body;
            try {
              const data = new detailsModel({
                ownership: ownership,
                expectedPrice: expectedPrice,
                pricePerAcres : pricePerAcres,
                description:description,
                allInclusivePrice:allInclusivePrice,
                govetChargesExcluded:govetChargesExcluded,
                priceNigotiable:priceNigotiable
              })
              await data.save()
              res.status(201).send({ "status":200, "success":true, "message": "Details Add Successfully",data })
            } catch (error) {
              console.log(error)
              res.status(401).send({ "status": 401,"success":false, "message": "Unable to Add" })
            }
          
        } 

         //listAddress..........................................................................................
 module.exports.getDetails = async (req, res) => {
  try{
    const data = await detailsModel.find()
  if(data){
  res.send({ "status": "201","success":true, "message": "get Address List  Successfully",data })
  }else{
    res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
  }
  }catch(error){
    res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
    console.log("error",error);
}
}
//deleteAddress..........................................................
module.exports.detailsDelete = async (req, res) => {
  const _id = req.body._id;
  try{
    const data = await detailsModel.findOneAndDelete({_id:_id})
  if(data){
  res.send({ "status": "201","success":true, "message": "Deleted address Successfully",data })
  }else{
    res.status(401).send({"status": "401","success":false, "message": "Unable To Delete" })
  }
  }catch(error){
    res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
    console.log("error",error);
}
}
//basicDetailsAdd..........................................................

module.exports.addBasicDetails = async (req, res) => {
  const { lookingTo,area, property, phone}= req.body;
        try {
          const data = new basicDetailsModel({
            lookingTo: lookingTo,
            area: area,
            property : property,
            phone:phone,
    
          })
          await data.save()
          res.status(201).send({ "status":200, "success":true, "message": "Basic Details Add Successfully",data })
        } catch (error) {
          console.log(error)
          res.status(401).send({ "status": 401,"success":false, "message": "Unable to Add" })
        }
      
    } 
//getBasicDetails.......................................................................
module.exports.getBasicDetails = async (req, res) => {
  try{
    const data = await basicDetailsModel.find()
  if(data){
  res.send({ "status": "201","success":true, "message": "get BasicDetails List  Successfully",data })
  }else{
    res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
  }
  }catch(error){
    res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
    console.log("error",error);
}
}
//deleteDetails..........................................................
module.exports.basicDetailsDelete = async (req, res) => {
  const _id = req.body._id;
  try{
    const data = await basicDetailsModel.findOneAndDelete({_id:_id})
  if(data){
  res.send({ "status": "201","success":true, "message": "Deleted Details Successfully",data })
  }else{
    res.status(401).send({"status": "401","success":false, "message": "Unable To Delete" })
  }
  }catch(error){
    res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
    console.log("error",error);
}
}
  
    
  