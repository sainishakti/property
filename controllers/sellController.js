const  sellModel =require("../models/sellHomeModel.js")
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
    
  