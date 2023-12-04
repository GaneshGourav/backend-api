const mongoose = require("mongoose");


const contactSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    phone :{type:Number,required:true},
    label:{type:String,required:true},
    booked_slots:[{type:Number}]
},{versionKey:false})

const contactModel= mongoose.model("contact",contactSchema);

module.exports={contactModel}