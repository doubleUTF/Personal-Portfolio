const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let exerciseSchema=new Schema({
  userId:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  duration:{
    type:Number,
    required:true
  },
  date:Date
})

let Exercise= mongoose.model('Exercise',exerciseSchema);
module.exports={Exercise}
