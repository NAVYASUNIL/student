const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://navya:navyasunil@cluster0.aqu3w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected")
})
.catch((err)=>{
    console.log(err)
})