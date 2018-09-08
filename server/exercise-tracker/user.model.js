const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let userSchema=new Schema({
  username:{
    type:String,
    required:true
  },
  _id:String,
})

let User= mongoose.model('Exercise-User',userSchema);
module.exports={User}
