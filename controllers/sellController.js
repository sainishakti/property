
const basicDetailsModel =require("../models/basicDetailsModel.js")

//SellPropertyDetailsAdd..........................................................

module.exports.addBasicDetails = async (req, res) => {
  const { lookingTo,area, property, userId,phoneNumber,locality,cityName,ownership,priceDetails,furnishing,otherFurnishing,furnishingType,openParking,propertyOnFloor,totalFloors,coveredParking,numberOfbBedrooms,numberOfbathrooms,balconis,otherRooms,availabilityStatus,ageOfProperty}= req.body;
        try {
          if(req.files == undefined){
          const data = new basicDetailsModel({
            lookingTo: lookingTo,
            area: area,
            property : property,
            userId:userId,
            phoneNumber:phoneNumber,
            locality:locality,
            cityName:cityName,
            ownership: ownership,
            priceDetails:priceDetails,
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
         return res.status(201).send({ "status":200, "success":true, "message": "Sell Property  Details Add Successfully",data })
     }  
     else{
                     var images = []
                      let photos = req.files
                      console.log("file",photos);
                      for (const img of photos) {
                      console.log("img",img);
                     images.push("https://property-ukgv.onrender.com/uploads/"+img.filename)
             }
             const imgs = {...images}
  const data = new basicDetailsModel({
    lookingTo: lookingTo,
    area: area,
    property : property,
    userId:userId,
    phoneNumber:phoneNumber,
    locality:locality,
    cityName:cityName,
    ownership: ownership,
    priceDetails:priceDetails,
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
image:imgs,
})
  await data.save()
 return res.status(201).send({ "status":200, "success":true, "message": "Property Details Add Successfully",data })

}     
        } catch (error) {
          console.log(error)
          res.status(401).send({ "status": 401,"success":false, "message": "Unable to Add" })
        }
      
    } 
    //AllPropertyList...............................
    module.exports.AllProperty = async (req, res) => {
    
      try{
        const data = await basicDetailsModel.find()
      if(data){
      res.send({ "status": "201","success":true, "message": "get SellDetails  Successfully",data })
      }else{
        res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
      }
      }catch(error){
        res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
        console.log("error",error);
  }
    }
    module.exports.propertyDelete = async (req, res) => {
      const {_id} = req.body;
      try{
        const data = await basicDetailsModel.findOneAndDelete({_id:_id})
      if(data){
      res.send({ "status": "201","success":true, "message": "property Deleted  Successfully",data })
      }else{
        res.status(401).send({"status": "401","success":false, "message": "Unable To Delete" })
      }
      }catch(error){
        res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
        console.log("error",error);
      }
    }
    //find City according data..................
    module.exports.getCitydata = async (req, res) => {
      const city = req.body.city
      console.log("..",city);
      debugger
      try{
        const data = await basicDetailsModel.find({cityName:city})
      if(data){
      res.send({ "status": "201","success":true, "message": "Get Data Successfully",data })
      }else{
        res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
      }
      }catch(error){
        res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
        console.log("error",error);
  }
    }
    //find property according pg..................
module.exports.propertyDataPg = async (req, res) => {
        try{
          const data = await basicDetailsModel.find({lookingTo:"PG"})
        if(data){
        res.send({ "status": "201","success":true, "message": "Get Data Successfully",data })
        }else{
          res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
        }
        }catch(error){
          res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
          console.log("error",error);
    }
      }

    //find property according sell..................
module.exports.propertyDataSell = async (req, res) => {
  try{
    const data = await basicDetailsModel.find({lookingTo:"Sell"})
  if(data){
  res.send({ "status": "201","success":true, "message": "Get Data Successfully",data })
  }else{
    res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
  }
  }catch(error){
    res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
    console.log("error",error);
}
}
    //find property according rent..................
    module.exports.propertyDataRent = async (req, res) => {
      const property = req.body.property
      try{
        const data = await basicDetailsModel.find({lookingTo:"Rent/Lease"})
      if(data){
      res.send({ "status": "201","success":true, "message": "Get Data Successfully",data })
      }else{
        res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
      }
      }catch(error){
        res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
        console.log("error",error);
    }
    }