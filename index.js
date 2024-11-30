// import
const express = require('express')
const StudentModel = require('./model/student')
require("./connection")

// initialize
var app = express()

// api creation
app.post("/add",async(req,res)=>{
    try{
        console.log(req.body)
        await StudentModel(req.body).save()
        res.send( "Data added ");
    } catch(error){
        console.log(error);

    }
    
})
//view api
app.get("/view",async(req,res)=>{
    try {
      
        const data = await StudentModel.find()
        res.json(data);
    } catch (error) {
        console.log(error);
        
    }
})
//  delete api
app.delete("/remove/:id",async(req,res)=>{
    try {
        await StudentModel.findByIdAndDelete(req.params.id)
        res.send("data Deleted");
    } catch (error) {
        console.log(error);
        
    }
})
// update
app.put("/update/:id",async(req,res)=>{
    try {
        
       var data = await StudentModel.findByIdAndUpdate(req.params.id,req.body)
        res.send({message:"data updated",data});
    } catch (error) {
        console.log(error);
    }
})

// post setting
app.listen(2005,()=>{
    console.log("port is running");
});