const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    age:{type:Number,required:true,min:18, max:60},
    fees:{type:Number, required:true,validate :(value)=> value >= 2000},
    
})
 
const studentModel =  mongoose.model("student", studentSchema)

module.exports = studentModel