const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let exerciseSchema=new Schema({
  userId:String,
  description:String,
  duration:Number,
  date:Date
})

let Exercise= mongoose.model('Exercise',exerciseSchema);
module.exports={Exercise}
