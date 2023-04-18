const UserModel = require("../models/userModel")
const getUser=async(req,res)=>{
    
    try{
        const data = await UserModel.find();
        res.status(200).send(data)
    }catch(err){
        res.status(500).send(err)
    }
}

// get by id and edit
const getById=async(req,res)=>{
    
    try {
        const User=await UserModel.findById(req.params.id);
        res.json(User) 
    } catch (error) {
        res.send(error)
    }
}

const postUser=async(req,res)=>{
    try{
        const User=await UserModel(req.body);
        const data=await User.save();
        console.log(data)
        res.json(data) //used to send data in db
    }catch(error){
console.log(error)
    }
}

const updateUser=async(req,res)=>{
    const id = req.params.id;
    const update = req.body; // Assumes the update data is in the request body
//   the purpose of { new: true } is it update with no-time 
try {
   let data=await UserModel.findByIdAndUpdate(id,{
        name:req.body.name,
        email:req.body.email,
        city:req.body.city,
        
    }  );
    const a=await data()
    res.json(a)     
} catch (error) {
    console.log("error in update ")
}
    
}
const deleteUser=async(req,res)=>{
    
   
try {
    
    const User=await UserModel.findByIdAndDelete(req.params.id);
    const variable=await User()
    res.json(variable) 
} catch (error) {
    res.send(error)
}


}

module.exports={getUser,postUser,updateUser,deleteUser,getById}