const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let userSchema=new Schema({
  username:String,
  _id:String,
})

let User= mongoose.model('Exercise-User',userSchema);
module.exports={User}
