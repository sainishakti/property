
const imageModel =require("../models/imageModel.js")
const basicDetailsModel =require("../models/basicDetailsModel.js")
const locationModel =require("../models/locationModel.js")
const propertyProfile =require("../models/propertyProfileModel.js")
const priceModel =require("../models/priceModel.js")

//uploadImage........................................................
module.exports.uploadImage = async (req, res) => {
        try {
                      var images = []
                      let photos = req.files
                      console.log("file",photos);
                      for (const img of photos) {
                      console.log("img",img);
                     images.push("https://property-ukgv.onrender.com/uploads/"+img.filename)
             }
             const imgs = {...images}
          const data = new imageModel({
            image:imgs,
            userId:req.body.userId
           
          })
          await data.save()
          res.status(201).send({ "status":200, "success":true, "message": "Upload Image Successfully",data })
        } catch (error) {
          console.log(error)
          res.status(401).send({ "status": 401,"success":false, "message": "Unable to Upload" })
        }
      
    } 
   //basicDetailsAdd..........................................................

module.exports.addBasicDetails = async (req, res) => {
  const { lookingTo,area, property, userId,phoneNumber}= req.body;
        try {
          const data = new basicDetailsModel({
            lookingTo: lookingTo,
            area: area,
            property : property,
            userId:userId,
            phoneNumber:phoneNumber
    
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
//AddLocations............................................
module.exports.addLocation = async (req, res) => {
  try {

    const{locality,userId,cityName}=req.body;
    const data = new locationModel({
      locality:locality,
      userId:userId,
      cityName:cityName
     
    })
    await data.save()
    res.status(201).send({ "status":200, "success":true, "message": "Add Location Successfully",data })
  } catch (error) {
    console.log(error)
    res.status(401).send({ "status": 401,"success":false, "message": "Unable to Add" })
  }

} 
//addProfileProperty...................................................................................

//AddLocations............................................
module.exports.addProfileProperty = async (req, res) => {
  try {

    const{furnishing,otherFurnishing,furnishingType,openParking,propertyOnFloor,totalFloors,coveredParking,numberOfbBedrooms,userId,numberOfbathrooms,balconis,otherRooms,availabilityStatus,ageOfProperty}=req.body;
    const data = new propertyProfile({
      userId:userId,
      numberOfbBedrooms: numberOfbBedrooms,
      numberOfbathrooms: numberOfbathrooms,
      balconis:balconis,
      otherRooms: otherRooms,
      availabilityStatus:availabilityStatus,
      ageOfProperty: ageOfProperty,
      coveredParking: coveredParking,
      openParking:openParking,
      totalFloors: totalFloors,
      propertyOnFloor:propertyOnFloor,
      furnishingType: furnishingType,
      furnishing: furnishing,
      otherFurnishing: otherFurnishing,
     
    })
    await data.save()
    res.status(201).send({ "status":200, "success":true, "message": "Add propertyProfile Successfully",data })
  } catch (error) {
    console.log(error)
    res.status(401).send({ "status": 401,"success":false, "message": "Unable to Add" })
  }

} 
//addPrice.............................................
module.exports.priceAdd = async (req, res) => {
  try {
    const{ownership,userId,pricePerAcres,exppectedPrice}=req.body;
    const data = new priceModel({
      ownership: ownership,
      exppectedPrice: exppectedPrice,
      pricePerAcres: pricePerAcres,
      userId:userId,
    })
    await data.save()
    res.status(201).send({ "status":200, "success":true, "message": "Add price Successfully",data })
  } catch (error) {
    console.log(error)
    res.status(401).send({ "status": 401,"success":false, "message": "Unable to Add" })
  }

} 
//getUpload...................................................
module.exports.getImage = async (req, res) => {
  try{
    const data = await imageModel.find()
  if(data){
  res.send({ "status": "201","success":true, "message": "get  imageList  Successfully",data })
  }else{
    res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
  }
  }catch(error){
    res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
    console.log("error",error);
}
}
//getprice.........................................

module.exports.getPrice = async (req, res) => {
  try{
    const data = await priceModel.find()
  if(data){
  res.send({ "status": "201","success":true, "message": "get  priceList Successfully",data })
  }else{
    res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
  }
  }catch(error){
    res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
    console.log("error",error);
}
}

//getProfileProperty..........................................
 module.exports.getProfileProperty = async (req, res) => {
  try{
    const data = await propertyProfile.find()
  if(data){
  res.send({ "status": "201","success":true, "message": "get  priceList  Successfully",data })
  }else{
    res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
  }
  }catch(error){
    res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
    console.log("error",error);
}
}
//getLocation.................................................
module.exports.getLocation = async (req, res) => {
  try{
    const data = await locationModel.find()
  if(data){
  res.send({ "status": "201","success":true, "message": "get  LocationList Successfully",data })
  }else{
    res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
  }
  }catch(error){
    res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
    console.log("error",error);
}
}
//deletePrice................................
module.exports.priceDelete = async (req, res) => {
  const _id = req.body._id;
  try{
    const data = await priceModel.findOneAndDelete({_id:_id})
  if(data){
  res.send({ "status": "201","success":true, "message": "Deleted Price Successfully",data })
  }else{
    res.status(401).send({"status": "401","success":false, "message": "Unable To Delete" })
  }
  }catch(error){
    res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
    console.log("error",error);
}
}
//deletePhotos....................................
module.exports.imageDelete = async (req, res) => {
  const _id = req.body._id;
  try{
    const data = await imageModel.findOneAndDelete({_id:_id})
  if(data){
  res.send({ "status": "201","success":true, "message": "Deleted Image Successfully",data })
  }else{
    res.status(401).send({"status": "401","success":false, "message": "Unable To Delete" })
  }
  }catch(error){
    res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
    console.log("error",error);
}
}

//deleteLocation....................................
module.exports.locationDelete = async (req, res) => {
  const _id = req.body._id;
  try{
    const data = await locationModel.findOneAndDelete({_id:_id})
  if(data){
  res.send({ "status": "201","success":true, "message": "Deleted location Successfully",data })
  }else{
    res.status(401).send({"status": "401","success":false, "message": "Unable To Delete" })
  }
  }catch(error){
    res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
    console.log("error",error);
}
}


//deletePropertyProfile...........................................
module.exports.propertyFileDelete = async (req, res) => {
  const _id = req.body._id;
  try{
    const data = await propertyProfile.findOneAndDelete({_id:_id})
  if(data){
  res.send({ "status": "201","success":true, "message": "Deleted PropertyProfile Successfully",data })
  }else{
    res.status(401).send({"status": "401","success":false, "message": "Unable To Delete" })
  }
  }catch(error){
    res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
    console.log("error",error);
}
}