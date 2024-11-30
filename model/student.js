const mongoose = require('mongoose');
var schema = mongoose.Schema({
    Name:String,
    Rollno:Number,
    Age:Number,
    Year:Number
    
})
var StudentModel = mongoose.model("student",schema)
module.exports=StudentModel