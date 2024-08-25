const schools=require("../models/school.model")


exports.createNewSchool= async (req,res)=>{
    const school_data={
        name : req.body.name,
        address : req.body.name,
        latitude : req.body.latitude,
        longitude : req.body.longitude
    }
    try{
        const school=await schools.create(school_data)
        return res.status(201).send(school)
    }catch(err){
        console.log("error while creating school",err)
        return res.status(500).send({
            message : "error while creating the school"
        })
    }
}

exports.getAllSchools=(req,res)=>{
    res.status(200).send([
        { value: JSON.stringify(schools) }
      ])
}