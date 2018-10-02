const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const bcrypt=require('bcryptjs');
const saltRounds=10;

let board=new Schema({
  title:{
    type:String,
    required:true,
    unique:true
  },
  threads:[{type:Schema.Types.ObjectId,ref:'Thread'}],
  description:String,
  bumped_on:{
    default:Date.now,
    type:Date
  },
  delete_password:{
    type:String,
    required:true
  },
})

board.pre('save', function (next){
  let user=this;
  bcrypt.genSalt(saltRounds,(err,salt)=>{
    bcrypt.hash(user.delete_password, salt, (err,hash)=>{
      user.delete_password=hash;
      next()
    });
  })
})

const Board=mongoose.model('Board',board);

module.exports=Board;
